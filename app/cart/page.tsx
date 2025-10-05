"use client"

import { useState } from "react"
import { X, Plus, Minus } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import FeaturesSection from "@/components/FeaturesSection"
import { useTranslation } from "react-i18next"
import Link from "next/link"

export default function CartPage() {
  const [couponCode, setCouponCode] = useState("")
  const { state, dispatch } = useCart()
  const { t } = useTranslation("cart")
  const { i18n } = useTranslation()

  const shipping = 0
  const taxes = 0
  const couponDiscount = 100

  let finalTotal = state.total

  if (state.total > 0) {
    finalTotal = state.total - couponDiscount + shipping + taxes
  }

  finalTotal = Math.max(finalTotal, 0)

    const updateQuantity = (id: number, color: string, size: string, newQuantity: number) => {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id, color, size, quantity: newQuantity },
      })
    }

    const removeItem = (id: number, color: string, size: string) => {
      dispatch({
        type: "REMOVE_ITEM",
        payload: { id, color, size },
      })
    }

    const clearCart = () => {
      dispatch({ type: "CLEAR_CART" })
    }

  return (
    <div className="min-h-screen">

      {/* Page Header */}
      <div className="bg-gray-100 py-16 mb-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 text-center mb-5">{t("page.title")}</h1>
          <Breadcrumb>
            <Link href="/" className="text-gray-600 hover:underline text-xl">{t("page.breadcrumb.home")}</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/about" className="text-amber-900 font-semibold text-md">{t("page.breadcrumb.cart")}</Link>
          </Breadcrumb>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
        <div className="overflow-x-auto">
          {/* Cart Header */}
          <div className="bg-[#f5bc62] px-4 sm:px-6 py-4 sm:py-5 ">
            <div className="grid grid-cols-12 gap-2 sm:gap-4 font-semibold text-base sm:text-lg text-gray-900">
          <div className="col-span-6">{t("cart.header.product")}</div>
          <div className="col-span-2 text-center hidden md:block">{t("cart.header.price")}</div>
          <div className="col-span-2 text-center hidden md:block">{t("cart.header.quantity")}</div>
          <div className="col-span-2 text-center hidden md:block">{t("cart.header.subtotal")}</div>
            </div>
          </div>

          {/* Cart Items */}
          <div className="divide-y divide-gray-200 ">
            {state.items.map((item, index) => (
          <div key={`${item.id}-${item.color}-${item.size}`} className="px-4 sm:px-6 py-4 sm:py-6">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
              {/* Product Info */}
              <div className="flex items-center gap-2 md:justify-start justify-center ">
            {item.color && item.size ? (
              <button
                onClick={() => removeItem(item.id, item.color as string, item.size as string)}
                className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            ) : null}
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name[i18n.language as "en" | "ar"]}
              width={64}
              height={64}
              className="w-20 h-24 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">
                {item.name[i18n.language as "en" | "ar"]}
              </h3>
              <p className="text-md text-gray-500">
                {t("cart.item.color")} : {item.color} | {t("cart.item.size")} : {item.size}
              </p>
            </div>
              </div>

              <div className="flex items-center md:gap-12 gap-5 justify-center">
              {/* Price */}
              <div className="col-span-6 sm:col-span-2 text-center mt-2 sm:mt-0 ">
                <span className="font-semibold text-lg">${item.price}.00</span>
              </div>

              {/* Quantity */}
              <div className="col-span-6 sm:col-span-2 flex items-center justify-center mt-2 sm:mt-0">
            <div className="flex items-center border border-gray-300">
              <button
                onClick={() => updateQuantity(item.id, item.color as string, item.size as string, item.quantity - 1)}
                className="p-2 hover:bg-gray-50 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-3 sm:px-4 py-2 border-x border-gray-300  text-center text-md">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.color as string, item.size as string, item.quantity + 1)}
                className="p-2 hover:bg-gray-50 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
              </div>

              {/* Subtotal */}
              <div className="col-span-12 sm:col-span-2 text-center mt-2 sm:mt-0">
                <span className="font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
            </div>
          </div>
            ))}
          </div>

          {/* Coupon Section */}
          <div className="px-4 sm:px-6 py-4 sm:py-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <input
            type="text"
            placeholder={t("cart.coupon.placeholder")}
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent w-full sm:w-auto"
          />
          <button className="bg-amber-900 cursor-pointer text-white px-4 py-3 hover:bg-amber-800 transition-colors w-full">
            {t("cart.coupon.apply")}
          </button>
            </div>
            <button onClick={clearCart} className="text-amber-900 cursor-pointer hover:text-red-500 transition-colors underline text-lg font-semibold ">
              {t("cart.coupon.clear")}
            </button>
          </div>
        </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border p-6">
              <div className="border-b mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">{t("summary.title")}</h3>
              </div>


              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold">{t("summary.items")}</span>
                  <span className="font-medium">{state.itemCount}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold">{t("summary.subtotal")}</span>
                  <span className="font-medium">${state.total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold">{t("summary.shipping")}</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold">{t("summary.taxes")}</span>
                  <span className="font-medium">${taxes.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400 font-semibold">{t("summary.discount")}</span>
                  <span className="font-medium text-green-600">${couponDiscount.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-400">{t("summary.total")}</span>
                    <span className="text-lg font-semibold text-gray-900">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => (window.location.href = "/checkout")}
                  className="w-full cursor-pointer bg-amber-900 text-white py-3 hover:bg-amber-800 transition-colors font-medium"
                >
                  {t("summary.checkout")}
                </button>
              </div>
            </div>
          </div>
        </div> 
      </div>

      {/* Features Section */}
          <FeaturesSection />

    </div>
  )
}
