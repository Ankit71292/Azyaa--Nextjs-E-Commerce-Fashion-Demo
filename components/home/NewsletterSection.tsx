import React from 'react'
import { Button } from '../ui/button'
import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next';

const NewsletterSection = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 flex flex-col gap-5">
            <p className="text-2xl text-gray-500 mb-2">{t("newsletter.subtitle")}</p>
            <h2 className="md:text-5xl text-4xl font-semibold text-gray-900 mb-4">
              {t("newsletter.title")}
            </h2>
            <p className="text-gray-600 text-xl">{t("newsletter.desc")}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 p-3 flex items-center pointer-events-none bg-[#f5bc62]">
                <Mail />
              </div>
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="w-full pl-14 pr-4 py-3 border border-gray-300 focus:ring-2 focus:ring-amber-900 focus:border-transparent outline-none"
              />
            </div>
            <Button className="bg-amber-900 hover:bg-amber-800 cursor-pointer text-white px-8 py-3 rounded-none h-12">{t("newsletter.subscribe")}</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewsletterSection