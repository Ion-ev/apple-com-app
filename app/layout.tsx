import type { Metadata } from "next";
import "./globals.css";
import Snow from "./components/Snow";

export const metadata: Metadata = {
  title: "Apple",
  description: "Converted from HTML to Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Snow />
      </body>
    </html>
  );
}
