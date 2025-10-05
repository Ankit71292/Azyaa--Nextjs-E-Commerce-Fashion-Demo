"use client"

import {  Shirt } from "lucide-react"

export default function Loader() {
  return (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">

      <div className="animate-bounce">
        <Shirt className="w-16 h-16 text-amber-900" />
      </div>

      <p className="mt-4 text-gray-800 text-xl font-semibold">
        Azyaa.
      </p>

      <div className="mt-2 h-0.5 w-32 bg-amber-900 animate-pulse rounded-full"></div>
    </div>
  )
}
