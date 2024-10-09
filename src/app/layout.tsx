import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./component/header";
import Navbar from "./component/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body      >
        <Header/>
        {children}
        <Navbar/>
      </body>
    </html>
  );
}
