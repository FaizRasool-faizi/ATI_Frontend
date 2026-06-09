import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Anjuman Talaba Islam | Premium Leadership",
  description: "Official Website of Anjuman Talaba Islam Pakistan - Building Future Muslim Student Leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {/* Our Premium Navbar globally injected */}
        <Navbar />
        
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
        
        {/* We will add Footer here later */}
        <Footer />
      </body>
    </html>
  );
}