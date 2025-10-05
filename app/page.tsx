"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BadgePercent } from "lucide-react"
import Image from "next/image"
import FeaturesSection from "@/components/FeaturesSection"
import CategoriesSection from "@/components/home/CategoriesSection"
import ProductsSection from "@/components/home/ProductsSection"
import SaleSection from "@/components/home/SaleSection"
import { DealsSection } from "@/components/home/DealsSection"
import { CollectionBannersSection } from "@/components/home/CollectionBannersSection"
import InstagramSection from "@/components/home/InstagramSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import BlogsSection from "@/components/home/BlogsSection"
import FAQSection from "@/components/home/FAQSection"
import NewsletterSection from "@/components/home/NewsletterSection"
import { useTranslation } from "react-i18next"
import { useLang } from "@/contexts/LangContext"
import Link from "next/link"

export default function FashionWebsite() {
  const { t } = useTranslation("home")
  const { dir } = useLang();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gray-100 lg:pt-0 pt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col lg:items-start items-center lg:text-start text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <div className="w-6 h-6 text-white bg-amber-900 rounded-full flex items-center justify-center">
                    <BadgePercent />
                </div>
                <span className="text-xl font-semibold">{t("hero.saleBadge")}</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">{t("hero.title")}</h1>

              <p className="text-gray-600 text-lg leading-relaxed max-w-md">{t("hero.description")}</p>

              <Link href="/shop">
                <Button className="bg-amber-900 hover:bg-amber-800 text-white mt-10 rounded-none px-8 py-3 text-lg w-40 h-14 cursor-pointer flex items-center justify-center">
                  {t("hero.shopNow")}
                  <ArrowRight className={`w-8 h-8 ${dir === "rtl" ? "rotate-180" : "rotate-0"}`} />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <Image
                src="/images/download-removebg-preview.png"
                alt="Fashion model"
                width={500}
                height={500}
                className="w-full md:h-[700px] h-[400px] object-cover rounded-lg relative -bottom-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Top Seller Products Section */}
      <ProductsSection />

      {/* Sale Banner Section */}
      <SaleSection />

      {/* Deals of the Day Section */}
      <DealsSection />

      {/* Collection Banners Section */}
      <CollectionBannersSection />

      {/* Follow Us On Instagram Section */}
      <InstagramSection />

      {/* Testimonials Section */}
        <TestimonialsSection />

      {/* Latest News & Blogs Section */}
      <BlogsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Newsletter Section */}
      <NewsletterSection />
      
    </div>
  )
}
