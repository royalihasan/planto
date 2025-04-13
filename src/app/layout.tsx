import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Planto - Your Plant Shop",
  description: "Shop for plants online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
