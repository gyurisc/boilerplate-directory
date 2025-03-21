import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Boilerplate Directory - Find the Perfect Starter Kit",
  description:
    "Browse, search, and filter through various boilerplate options to find the right foundation for your projects.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>        
          {children}
      </body>
    </html>
  )
}

