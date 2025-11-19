import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch,
  contentApiUrlOverride: '/api/tina/gql',
  admin: {
    auth: {
      // useLocalAuth: process.env.TINA_PUBLIC_IS_LOCAL === 'true',
      useLocalAuth: process.env.TINA_PUBLIC_IS_LOCAL === 'true',
  
    },
  },
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    // Cloudflare R2 configuration (S3-compatible)
    // Configure R2 via environment variables:
    // R2_BUCKET_NAME, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_ENDPOINT
    // If not configured, falls back to local storage in public folder
    // tina: {
    //   mediaRoot: process.env.R2_ROOT_PATH || "",
    //   publicFolder: "public",
    // },
   loadCustomStore: async () => {
        const pack = await import("next-tinacms-s3");
        return pack.TinaCloudS3MediaStore;
      },
    // Note: For R2 integration, you'll need to set up a custom media API route
    // See: https://tina.io/docs/reference/media/overview/
    // The R2 credentials should be configured in your API route at /api/tina/media
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "docs",
        label: "Documentation",
        path: "content/docs",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => {
            // Generate route based on file path
            const path = document._sys.relativePath
              .replace(/\.mdx$/, "")
              .replace(/\/index$/, "");
            return `/docs/${path}`;
          },
        },
      },
      {
        name: "posts",
        label: "Blog Posts",
        path: "content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
