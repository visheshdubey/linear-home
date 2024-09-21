import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linear - Plan and build products",
  description: "Linear - Plan and build products",
  icons: "/favicon.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any"></link>
      <link rel="icon" href="/static/favicon.svg" type="image/svg+xml"></link>
      <body
        className={`font-regular antialiased bg-linear-bg-primary text-linear-text-primary overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
