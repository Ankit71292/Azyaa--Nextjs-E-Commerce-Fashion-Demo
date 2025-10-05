"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import FeaturesSection from "@/components/FeaturesSection"
import { useTranslation } from "react-i18next"
import { wishlistProducts } from "@/data/wishlistData"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"

export default function WishlistPage() {
  const { t, i18n } = useTranslation("wishList")
  const [wishlistItems, setWishlistItems] = useState(wishlistProducts)

  const wishlistUrl = "https://www.example.com"

  const removeFromWishlist = (id: number) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id))
  }

  const clearWishlist = () => {
    setWishlistItems([])
  }

  const copyWishlistLink = () => {
    navigator.clipboard.writeText(wishlistUrl)
    // You could add a toast notification here
  }

     const { dispatch } = useCart()
  
    const addToCart = (item: typeof wishlistProducts[number]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        image: item.image || "/placeholder.svg",
        price: item.price,
        color: item.color,
        size: item.size,
      }
    })
    }

  return (
    <div className="min-h-screen">

       {/* Page Header */}
        <div className="text-center bg-gray-50 mb-8 py-16">
           <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 text-center mb-5">{t("pageTitle")}</h1>
            <Breadcrumb>
              <Link href="/" className="text-gray-600 hover:underline hover:text-amber-900 text-md">{t("breadcrumbHome")}</Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/order-completed" className="text-amber-900 font-semibold text-md">{t("pageTitle")}</Link>
            </Breadcrumb>
        </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Wishlist Table */}
        <div className="bg-white">
          {/* Table Header */}
          <div className="bg-[#f5bc62] px-6 py-4 md:block hidden">
            <div className="grid grid-cols-12 gap-4 font-semibold text-gray-900">
              <div className="col-span-5">{t("tableHeaders.product")}</div>
              <div className="col-span-2">{t("tableHeaders.price")}</div>
              <div className="col-span-2">{t("tableHeaders.dateAdded")}</div>
              <div className="col-span-1"></div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {wishlistItems.map((item) => (
              <div key={item.id} className="px-6 py-6">
                <div className="grid md:grid-cols-12 gap-4 items-center justify-center">
                  {/* Product */}
                  <div className="col-span-5 flex items-center gap-4">
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                    <div className="w-20 h-24 bg-gray-100 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name[i18n.language as "en" | "ar"]}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{item.name[i18n.language as "en" | "ar"]}</h3>
                      <p className="text-md font-semibold text-gray-500">
                        {t("productColor")} : {item.color} | {t("productSize")} : {item.size}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 ml-10 md:ml-0">
                    <span className="font-semibold text-gray-900">${item.price.toFixed(2)}</span>
                  </div>

                  {/* Date Added */}
                  <div className="col-span-2">
                    <span className="text-gray-600 font-semibold">{item.dateAdded}</span>
                  </div>



                  {/* Add to Cart Button */}
                  <div className="col-span-2">
                    <Button
                      className="bg-amber-900 rounded-none py-3 cursor-pointer hover:bg-amber-800 text-white"
                      onClick={() => addToCart(item)}
                    >
                      {t("addToCart")}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wishlist Actions */}
        <div className="border-t py-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Wishlist Link */}
            <div className="flex items-center gap-4">
              <span className="font-medium text-lg underline text-gray-900">{t("wishlistLink")}</span>
              <div className="flex items-center gap-2 px-5 py-3 border">
                <span className="text-gray-600 text-sm">{wishlistUrl}</span>
              </div>
              <button
                  onClick={copyWishlistLink}
                  className="bg-amber-900 hover:bg-amber-800 text-white cursor-pointer px-5 py-3 text-sm font-semibold transition-colors"
                >
                  {t("copy")}
                </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={clearWishlist}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent cursor-pointer rounded-none"
              >
                {t("clearWishlist")}
              </Button>
                <Button
                className="bg-amber-900 hover:bg-amber-800 text-white cursor-pointer rounded-none"
                onClick={() => {
                  wishlistItems.forEach(item => {
                  addToCart(item)
                  })
                }}
                >
                {t("addAllToCart")}
                </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <FeaturesSection />
      </main>

    </div>
  )
}
