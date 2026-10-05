import type { Metadata, Viewport } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@/styles/global.css";
import "@/styles/primitives.css";

export const metadata: Metadata = {
  title: {
    default: "Webghost — Protocol Engineer",
    template: "%s | Webghost",
  },
  description:
    "Abdurrahman Adesanya builds secure onchain systems, developer infrastructure, and autonomous agents.",
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
