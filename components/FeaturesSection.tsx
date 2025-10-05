import { Headphones, Package, Wallet } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FeaturesSection = () => {
  const { t } = useTranslation("home")

  return (
    <>
          {/* Features Section */}
          <section className="py-16 bg-white md:px-20">
            <div className="w-full flex justify-center">
              <div className="grid lg:grid-cols-3 md:gap-32 gap-10">

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 relative">
                   <div className='bg-[#f5bc62] w-8 h-8 left-4 top-4 z-0 absolute rounded-full flex items-center justify-center'/>
                    <Package strokeWidth={1.25} className="w-28 h-28 z-10 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-2xl">{t("features.freeShippingTitle")}</h3>
                    <p className="text-gray-600 text-md">{t("features.freeShippingDesc")}</p>
                  </div>
                </div>
    
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 relative">
                   <div className='bg-[#f5bc62] w-8 h-8 left-4 top-4 z-0 absolute rounded-full flex items-center justify-center'/>
                    <Wallet strokeWidth={1.25} className="w-28 h-28 z-10 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-2xl">{t("features.paymentTitle")}</h3>
                    <p className="text-gray-600 text-md">{t("features.paymentDesc")}</p>
                  </div>
                </div>
    
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 relative">
                   <div className='bg-[#f5bc62] w-8 h-8 left-4 top-4 z-0 absolute rounded-full flex items-center justify-center'/>
                    <Headphones strokeWidth={1.25} className="w-28 h-28 z-10 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-2xl">{t("features.supportTitle")}</h3>
                    <p className="text-gray-600 text-md">{t("features.supportDesc")}</p>
                  </div>
                </div>

              </div>
            </div>
          </section>
    </>
  )
}

export default FeaturesSection