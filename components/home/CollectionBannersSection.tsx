import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLang } from "@/contexts/LangContext";
import Link from "next/link";

export const CollectionBannersSection = () => {
  const { t } = useTranslation("home");
  const { dir } = useLang();
  
  return (
    <>
      <section className="py-16 bg-white px-4 md:px-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Men's Collection Banner */}
            <div className="bg-gray-100 overflow-hidden">
              <div className="grid grid-cols-2 h-96">
                <div className="p-8 flex flex-col justify-center">
                  <p className="text-xl text-gray-500 mb-2">{t("collection.men.discount")}</p>
                  <h3 className="text-4xl font-semibold text-gray-900 mb-4">
                    {t("collection.men.title")}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 md:block hidden">
                    {t("collection.men.desc")}
                  </p>
                  <Link href="/shop">
                    <Button className="bg-[#f5bc62] hover:bg-[#f1c070] text-amber-900 w-fit p-3 gap-1 flex rounded-none cursor-pointer">
                      {t("collection.men.explore")}
                      <ArrowRight className={`${dir === "rtl" ? "rotate-180" : "rotate-0"}`}/>
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src="/images/Collection-men.png"
                    alt="Men's Collection"
                    width={300}
                    height={320}
                    className="w-full h-full object-cover absolute"
                  />
                </div>
              </div>
            </div>

            {/* Women's Collection Banner */}
            <div className="bg-[#f5bc62] overflow-hidden">
              <div className="grid grid-cols-2 lg:h-96 h-auto">
                <div className="p-8 flex flex-col justify-center">
                  <p className="text-xl text-gray-800 mb-2">{t("collection.women.discount")}</p>
                  <h3 className="text-4xl font-semibold text-gray-900 mb-4">
                    {t("collection.women.title")}
                  </h3>
                  <p className="text-gray-800 text-lg mb-6 md:block hidden">
                    {t("collection.women.desc")}
                  </p>
                   <Link href="/shop">
                    <Button className="bg-amber-900 hover:bg-amber-800 text-white w-fit h-12 rounded-none cursor-pointer">
                      {t("collection.women.shopNow")}
                      <ArrowRight className={`${dir === "rtl" ? "rotate-180" : "rotate-0"}`}/>
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src="/images/Collection-women.png"
                    alt="Women's Collection"
                    width={300}
                    height={320}
                    className="w-full lg:h-[450px] h-full object-cover absolute lg:bottom-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
