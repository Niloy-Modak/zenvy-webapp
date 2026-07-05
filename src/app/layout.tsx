
import {  Inter } from "next/font/google";
import "./globals.css";

const InterFront = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${InterFront.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning >{children}</body>
    </html>
  );
}
