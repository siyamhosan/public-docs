import { DeleteObjectCommand, ListObjectsV2Command, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

// Initialize S3 client for Cloudflare R2 (S3-compatible)
const getS3Client = () => {
  if (
    !process.env.R2_BUCKET_NAME ||
    !process.env.R2_ACCESS_KEY_ID ||
    !process.env.R2_SECRET_ACCESS_KEY
  ) {
    return null;
  }

  return new S3Client({
    endpoint: process.env.R2_ENDPOINT || 
      `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    region: process.env.R2_REGION || "auto",
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    },
    forcePathStyle: true,
  });
};

const BUCKET_NAME = process.env.R2_BUCKET_NAME || "";
const ROOT_PATH = process.env.R2_ROOT_PATH || "media";

export async function POST(request: NextRequest) {
  const s3Client = getS3Client();
  
  if (!s3Client) {
    return NextResponse.json(
      { error: "R2 not configured" },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const directory = formData.get("directory") as string || "";

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const key = directory
      ? `${ROOT_PATH}/${directory}/${file.name}`
      : `${ROOT_PATH}/${file.name}`;

    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: file.type,
    });

    await s3Client.send(command);

    // Generate public URL (adjust based on your R2 public URL setup)
    const publicUrl = process.env.R2_PUBLIC_URL
      ? `${process.env.R2_PUBLIC_URL}/${key}`
      : `https://${BUCKET_NAME}.${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${key}`;

    return NextResponse.json({
      filename: file.name,
      directory,
      src: publicUrl,
    });
  } catch (error) {
    console.error("Error uploading to R2:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const s3Client = getS3Client();
  
  if (!s3Client) {
    return NextResponse.json(
      { error: "R2 not configured" },
      { status: 500 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const directory = searchParams.get("directory") || "";

    const prefix = directory
      ? `${ROOT_PATH}/${directory}/`
      : `${ROOT_PATH}/`;

    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: prefix,
    });

    const response = await s3Client.send(command);
    const files = (response.Contents || []).map((item) => {
      const key = item.Key || "";
      const publicUrl = process.env.R2_PUBLIC_URL
        ? `${process.env.R2_PUBLIC_URL}/${key}`
        : `https://${BUCKET_NAME}.${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${key}`;

      return {
        filename: key.replace(prefix, ""),
        directory: directory || "",
        src: publicUrl,
      };
    });

    return NextResponse.json(files);
  } catch (error) {
    console.error("Error listing R2 files:", error);
    return NextResponse.json(
      { error: "Failed to list files" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const s3Client = getS3Client();
  
  if (!s3Client) {
    return NextResponse.json(
      { error: "R2 not configured" },
      { status: 500 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get("filename");
    const directory = searchParams.get("directory") || "";

    if (!filename) {
      return NextResponse.json(
        { error: "No filename provided" },
        { status: 400 }
      );
    }

    const key = directory
      ? `${ROOT_PATH}/${directory}/${filename}`
      : `${ROOT_PATH}/${filename}`;

    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    });

    await s3Client.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting from R2:", error);
    return NextResponse.json(
      { error: "Failed to delete file" },
      { status: 500 }
    );
  }
}
