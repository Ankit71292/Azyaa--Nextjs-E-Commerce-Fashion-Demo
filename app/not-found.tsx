"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export default function NotFound() {
  const { i18n } = useTranslation()
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8">
        {/* 404 with Image */}
        <div className="relative">
          <div className="text-[200px] md:text-[300px] font-bold text-gray-200 leading-none select-none">
            4
            <span className="relative inline-block">
              <span className="text-gray-200">0</span>
              <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden">
                <Image
                  src="https://i.pinimg.com/1200x/a1/9f/49/a19f49a3867f130bf0a9fb17166b84fb.jpg"
                  alt="Fashion Model"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </span>
            4
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{i18n.language === "en" ? "Oops! Page not Found" : "عفوا! الصفحة غير موجودة"}</h1>
          <div className="space-y-2 text-gray-600">
            <p>{i18n.language === "en" ? "The page you are looking for cannot be found." : "الصفحة التي تبحث عنها غير موجودة."}</p>
            <p>{i18n.language === "en" ? "take a break before trying again" : "خذ قسطًا من الراحة قبل المحاولة مرة أخرى"}</p>
          </div>
        </div>

        {/* Home Button */}
        <Button asChild className="bg-amber-800 hover:bg-amber-900 rounded-none text-white px-8 py-3 h-auto text-base font-medium">
          <Link href="/">{i18n.language === "en" ? "Go To Home Page" : "اذهب إلى الصفحة الرئيسية"}</Link>
        </Button>
      </div>
    </div>
  )
}
