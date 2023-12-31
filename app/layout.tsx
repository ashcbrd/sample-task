import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Sample Task",
  description: "Sample task for Upwork",
  openGraph: {
    images: "/og_image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
