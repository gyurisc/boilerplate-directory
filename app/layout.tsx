import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"
import { config } from "@/config";
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${config.directoryName} - ${config.directoryBlurb}`,
  description: config.directoryDescription,
  keywords: config.directoryKeywords,
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

