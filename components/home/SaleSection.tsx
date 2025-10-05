import Image from 'next/image'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLang } from '@/contexts/LangContext'
import Link from 'next/link'

const SaleSection = () => {
  const { t } = useTranslation("home");
  const { dir } = useLang();

  return (
    <>
    <section className="py-2 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
            <div className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex items-center">
                <div className='md:w-full flex flex-col justify-center items-center md:items-center lg:items-start text-center lg:text-start'>
                  <p className="text-gray-600 mb-6 text-2xl">
                    {t("offer.limitedTime")}
                  </p>
                  <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4"> {t("offer.title")}</h2>
                  <p className="text-gray-600 mb-6">
                    {t("offer.description")}
                  </p>
                  <Link href="/shop" className="bg-amber-900 hover:bg-amber-800 flex text-white justify-center items-center gap-2 py-3 h-14 w-36 text-md font-semibold rounded-none">{t("hero.shopNow")} <ArrowRight className={`${dir === "rtl" ? "rotate-180" : "rotate-0"}`}/></Link>
                </div>
              </div>
              <div className="relative flex justify-center">
                <Image
                  src="/images/offers.png"
                  alt="Fashion sale"
                  width={600}
                  height={400}
                  className="w-[400px] h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SaleSection