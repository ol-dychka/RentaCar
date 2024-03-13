import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <SessionProvider>
          {/* <Navbar /> */}
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
