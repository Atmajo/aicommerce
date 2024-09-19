import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI Commerce",
  description:
    "AI Commerce is a ai powered e-commerce platform that helps you to create a online store in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("")}>{children}</body>
    </html>
  );
}
