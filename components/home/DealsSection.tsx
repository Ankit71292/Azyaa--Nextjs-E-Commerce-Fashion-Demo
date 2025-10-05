
import React, { useRef } from "react";
import { ArrowRight, Expand, Heart, ShoppingCart, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { dealsOfDay } from "@/data/DealsSectionData";
import { useLang } from "@/contexts/LangContext";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";

export const DealsSection = () => {
  const { t, i18n } = useTranslation("home");
  const { dir } = useLang();
  const { dispatch } = useCart();

  const sliderRef = useRef<HTMLDivElement>(null);

  const addToCart = (product: typeof dealsOfDay[number]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        image: product.image || "/placeholder.svg",
        price: product.price,
        originalPrice: product.originalPrice,
      },
    });
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 400;
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 400;
    }
  };

  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* العنوان + الأزرار */}
        <div className="mb-8 flex flex-row md:items-center lg:justify-between justify-center">
          <div>
            <p className="text-gray-600 mb-3 text-2xl text-center lg:text-start">{t("todayDeals.subtitle")}</p>
            <h2 className="text-4xl font-semibold text-gray-900 text-center lg:text-start">{t("todayDeals.title")}</h2>
          </div>

          {/* الأزرار للشاشات الكبيرة */}
          <div className={`hidden lg:flex  gap-3 mt-4 md:mt-0 ${dir === "rtl" ? "flex-row-reverse" : "flex-row"}`}>
            <button
              onClick={scrollLeft}
              className="w-14 h-14 bg-[#f5bc62] flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer"
            >
              <ChevronLeft className={`w-7 h-7 text-gray-900`} />
            </button>
            <button
              onClick={scrollRight}
              className="w-14 h-14 bg-amber-900 flex items-center justify-center hover:bg-amber-800 transition-colors cursor-pointer"
            >
              <ChevronRight className={`w-7 h-7 text-white`} />
            </button>
          </div>
        </div>

        {/* السلايدر */}
        <div ref={sliderRef} className="overflow-x-auto scroll-smooth" style={{ scrollbarWidth: "none" }}>
          <div className="flex gap-6 w-max">
            {dealsOfDay.map((product) => (
              <div
                key={product.id}
                className="border-2 p-2 h-96 flex items-center gap-6 w-[550px] group relative"
              >
                {/* صورة المنتج */}
                <div className="w-1/2 h-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name[i18n.language as "en" | "ar"]}
                    width={150}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* لافتة الخصم */}
                <div className="absolute w-20 h-8 flex justify-center items-center top-5 left-5 right-5 bg-amber-900 text-white text-md font-light py-1">
                  {t("todayDeals.discount")}
                </div>

                {/* أيقونات الإجراء */}
                <div className="flex-col flex gap-3 absolute top-5 left-56 right-56 lg:group lg:hidden group-hover:flex animate-in">
                  <Link
                    href="/wishlist"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <Heart className="w-5 h-5 text-gray-600" />
                  </Link>

                  <Link
                    href={`/product/${product.id}`}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <Expand className="w-5 h-5 text-gray-600" />
                  </Link>

                  <button
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* تفاصيل المنتج */}
                <div className="flex-1 gap-2 flex flex-col justify-between">
                  <p className="text-gray-600 text-md">{t("todayDeals.category")}</p>
                  <h3 className="font-semibold text-2xl text-gray-900 mb-2">
                    {product.name[i18n.language as "en" | "ar"]}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  <p className="text-gray-600">{t("offer.description")}</p>

                  <Link
                    href="/shop"
                    className="text-amber-800 bg-white px-3 py-3 h-14 w-32 text-md font-semibold rounded-none flex flex-row justify-center items-center gap-1 cursor-pointer"
                  >
                    {t("todayDeals.shopNow")}{" "}
                    <ArrowRight
                      className={`w-5 h-5 ${dir === "rtl" ? "rotate-180" : "rotate-0"}`}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

