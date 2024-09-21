import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linear - Plan and build products",
  description: "Linear - Plan and build products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-regular antialiased bg-linear-bg-primary text-linear-text-primary overflow-y-visible min-h-[200vh]`}
      >
        {children}
      </body>
    </html>
  );
}
