import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrandForge — AI Brand Kits for Nigerian Businesses",
  description: "Describe your business. Get a full brand kit in 60 seconds. Logo, colours, fonts, social templates — built by AI, made for Nigeria.",
  keywords: "brand kit nigeria, AI branding, logo generator nigeria, small business branding lagos",
  openGraph: {
    title: "BrandForge",
    description: "AI brand kits for Nigerian businesses. Look like ₦1M in 60 seconds.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
