import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { LangProvider } from "@/contexts/LangContext"
import { Cairo, Roboto } from 'next/font/google';
import LayoutWrapper from "@/components/LayoutWrapper"
import RouteLoader from "@/components/RouteLoader"
const inter = Inter({ subsets: ["latin"] })

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
  weight: ['400', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['400', '700'],
});


export const metadata: Metadata = {
  title: "Azyaa",
  description: "Your ultimate fashion destination",
  keywords: ["fashion", "clothing", "accessories", "style"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${cairo.variable} ${roboto.variable}`}>
        <LangProvider>
          <CartProvider>
          <LayoutWrapper>
            <RouteLoader>
              {children}
            </RouteLoader>
          </LayoutWrapper>
          </CartProvider>
        </LangProvider>
      </body>
    </html>
  )
}
