import { fonts } from "~/config/fonts";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import type { Metadata, Viewport } from "next";

import "~/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [],
  authors: [],
  creator: "",
  publisher: "",
  robots: "index, follow",
  applicationName: siteConfig.name,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fonts.sans.variable,
          "bg-zinc-950 text-zinc-50 antialiased font-sans",
        )}
      >
        {children}
      </body>
    </html>
  );
}
