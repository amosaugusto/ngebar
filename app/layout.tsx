import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import './globals.css'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'NgeBar',
  description: 'Kolaborasi Tanpa Batas, Ngetik Bareng Lebih Mudah!'
}

export default function RootLayout({ children }: {children : React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
