import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import MainSidebar from "@/components/main-sidebar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative min-h-screen bg-background font-sans text-neutral-700 antialiased",
          fontSans.variable,
        )}
      >
        <div className="mx-auto flex h-screen w-full max-w-7xl flex-1 flex-col overflow-hidden border border-neutral-200 bg-gray-100 md:flex-row">
          <MainSidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
