import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/metadata";

export const metadata: Metadata = {
  title: `${site.name} — Management Consulting`,
  description: site.description,
  openGraph: {
    title: `${site.name} — Management Consulting`,
    description: site.description,
    url: site.url,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Management Consulting`,
    description: site.description,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
