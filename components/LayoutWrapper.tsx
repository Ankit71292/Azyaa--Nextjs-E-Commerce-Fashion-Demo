// components/LayoutWrapper.tsx
"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    const noLayoutPages = ["/sign-up", "/sign-in", "/forgot-password", "/reset-password", "/verify-code", "/complete-profile"]
    const hideLayout = noLayoutPages.includes(pathname)
    
    return (
        <>
        {!hideLayout && <Header />}
        <main>{children}</main>
        {!hideLayout && <Footer />}
        </>
    )
}
