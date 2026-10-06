import type { Metadata, Viewport } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@/styles/global.css";
import "@/styles/primitives.css";
import "@/styles/hero.css";
import "@/styles/nivyr.css";
import "@/styles/product.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://webghost-portfolio.vercel.app"),
  title: {
    default: "Webghost — Protocol Engineer",
    template: "%s | Webghost",
  },
  description:
    "Abdurrahman Adesanya builds secure onchain systems, developer infrastructure, and autonomous agents.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Webghost",
    title: "Webghost — Protocol Engineer",
    description: "Protocol engineering, privacy infrastructure and autonomous systems.",
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Webghost — Protocol Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webghost — Protocol Engineer",
    description: "Protocol engineering, privacy infrastructure and autonomous systems.",
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>{children}</body>
    </html>
  );
}
