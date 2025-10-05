"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Loader from "./Loader"

export default function RouteLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)   
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  )
}
