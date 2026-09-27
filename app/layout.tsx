import type { Metadata } from "next";
import "./globals.css";
import "./english.css";

const title = "MisOr Tour | Cagayan de Oro Fam Tour 2026";
const description = "Discover Cagayan de Oro: nature, golf, ocean adventures, dining, hotels and the September 30–October 3, 2026 Fam Tour itinerary.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "MisOr Tour",
    locale: "en_US",
    type: "website",
    images: [{ url: "/share-ocean-welcome-v1.jpg", width: 1200, height: 630, alt: "Welcome to Cagayan de Oro", type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/share-ocean-welcome-v1.jpg"],
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="image_src" href="/share-ocean-welcome-v1.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
