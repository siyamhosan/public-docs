import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.lrbd.xyz';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Legacy Roleplay Bangladesh - Documentation',
    template: '%s | Legacy Roleplay Bangladesh',
  },
  description:
    'Comprehensive documentation for Legacy Roleplay Bangladesh, a community-driven GTA V roleplay server for the Bengali community.',
  keywords: [
    'Legacy Roleplay',
    'GTA V Roleplay',
    'FiveM',
    'Bangladesh',
    'Roleplay Server',
    'Documentation',
  ],
  authors: [{ name: 'Legacy Roleplay Bangladesh' }],
  creator: 'Legacy Roleplay Bangladesh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Legacy Roleplay Bangladesh',
    title: 'Legacy Roleplay Bangladesh - Documentation',
    description:
      'Comprehensive documentation for Legacy Roleplay Bangladesh, a community-driven GTA V roleplay server for the Bengali community.',
    images: [
      {
        url: '/og/docs/image.png',
        width: 1200,
        height: 630,
        alt: 'Legacy Roleplay Bangladesh Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legacy Roleplay Bangladesh - Documentation',
    description:
      'Comprehensive documentation for Legacy Roleplay Bangladesh, a community-driven GTA V roleplay server for the Bengali community.',
    images: ['/og/docs/image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification if needed
    // google: 'verification-code',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
