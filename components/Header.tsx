"use client"
import { useLang } from '@/contexts/LangContext';
import '../i18n'; 
import { ChevronDown, Heart, Menu, Search, ShoppingCart, User, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useCart } from '@/lib/cart-context';
import Image from 'next/image';


const Header = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true)
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const { t, i18n } = useTranslation("header");
    const { lang, toggleLang} = useLang();
    const { state } = useCart()


    const womenCategories = [
      t("womenCategories.Handbags"),
      t("womenCategories.Watches"),
      t("womenCategories.Sunglasses"),
      t("womenCategories.Hat"),
      t("womenCategories.Gloves"),
      t("womenCategories.Belts"),
      t("womenCategories.HairAccessories")
    ]
    
    const menCategories = [
      t("menCategories.Ties"), 
      t("menCategories.Belts"), 
      t("menCategories.Wallets"), 
      t("menCategories.Hats"), 
      t("menCategories.Sunglasses"), 
      t("menCategories.Gloves"), 
      t("menCategories.Socks")
    ]

    const Pages = [
      {name : t("pages.home"), path: "/"},
      {name : t("pages.shop"), path: "/shop"},
      {name : t("pages.aboutUs"), path: "/about"},
      {name : t("pages.contact"), path: "/contact"},
      {name : t("pages.blog"), path: "/blog"},
      {name : t("pages.faq"), path: "/faqs"},
      {name : t("pages.completeProfile"), path: "/complete-profile"},
      {name : t("pages.forgotPassword"), path: "/forgot-password"},
      {name : t("pages.orderComplete"), path: "/order-completed"},
      {name : t("pages.signIn"), path: "/sign-in"},
      {name : t("pages.signUp"), path: "/sign-up"},
      {name : t("pages.myAccount"), path: "/account"},
      {name : t("pages.wishlist"), path: "/wishlist"},
      {name : t("pages.cart"), path: "/cart"},
      {name : t("pages.checkout"), path: "/checkout"},
      {name : t("pages.productDetails"), path: "/product/1"},
      {name : t("pages.resetPassword"), path: "/reset-password"},
      {name : t("pages.verifyCode"), path: "/verify-code"},
      {name : t("pages.trackOrder"), path: "/track-order"},
      {name : t("pages.blogDetails"), path: "/blog/post1"},
    ]


  return (
    <>
      {/* Top Banner */}
      {isBannerVisible && (
        <div className="bg-amber-900 h-14 text-white text-md py-2 px-4 md:px-20 lg:flex justify-center gap-20 md:gap-72 items-center hidden">
          <div className="hidden md:flex items-center">
            <span>{t("topBanner.support")}</span>
          </div>

        <div className="flex items-center">
          <span>{t("topBanner.offer")} <span className=" font-bold text-[#e3b166] underline cursor-pointer">{t("topBanner.signupNow")}</span></span>
        </div>

        <button onClick={() => setIsBannerVisible(false)} className="text-white hover:text-gray-200 cursor-pointer">
            <X className="w-4 h-4" />
          </button>
      </div>
      )}

      {/* Header */}
      <header className="bg-white sticky top-0 z-50 h-20 flex items-center justify-between shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center ">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-900 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-normal">{i18n.language === "ar" ? "أ" : "A"}</span>
              </div>
              <span className="text-xl font-bold text-gray-900 md:block hidden">{i18n.language === "ar" ? "أزياء" : "Azyaa"}</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-8">
              <Link href="/" className="text-gray-600 hover:text-amber-900 transition-colors font-semibold">
                {t('home')}
              </Link>
              <Link href="/shop" className="text-gray-600 hover:text-amber-900 transition-colors font-semibold">
                {t('shop')}
              </Link>

              {/* Women Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setHoveredMenu("women")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href="/shop?category=women"
                  className="text-gray-700 hover:text-amber-900 transition-colors flex items-center font-semibold"
                >
                  {t('women')}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                {hoveredMenu === "women" && (
                  <div className="absolute top-full left-0 right-0 w-[100%] md:w-[600px] bg-white shadow-lg p-6 z-50 border-b-5 border-b-orange-300">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">{t('womenCategories.Women')}</h3>
                        <ul className="space-y-2">
                          {womenCategories.map((category) => (
                            <li key={category}>
                              <Link
                                href={`/shop?category=${category.toLowerCase()}`}
                                className="text-gray-600 hover:text-amber-900 transition-colors"
                              >
                                {category}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#f5bc62] text-center p-4">
                        <div className="text-sm font-semibold text-amber-900 ">{t('womenCategories.latestOffers')}</div>
                        <div className="text-lg font-bold text-gray-900 mb-5">{t('womenCategories.offAccessories')}</div>
                        <Link href='/shop?category=women' className="bg-amber-900 text-white px-4 py-2 rounded text-sm hover:bg-amber-800 transition-colors">
                          {t('shopNow')}
                        </Link>
                        <div className="mt-3">
                          <Image
                            src="/images/hatWomen.png"
                            alt="Accessories"
                            className="rounded"
                            width={300}
                            height={200}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Men Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setHoveredMenu("men")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href="/shop?category=men"
                  className="text-gray-600 hover:text-amber-900 transition-colors flex items-center font-semibold"
                >
                  {t('men')}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                {hoveredMenu === "men" && (
                  <div className="absolute top-full left-0 right-0 w-[100%] md:w-[600px] bg-white shadow-lg border-b-5 border-b-orange-300 p-6 z-50">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">{t('menCategories.Men')}</h3>
                        <ul className="space-y-2">
                          {menCategories.map((category) => (
                            <li key={category}>
                              <Link
                                href={`/shop?category=${category.toLowerCase()}`}
                                className="text-gray-600 hover:text-amber-900 transition-colors"
                              >
                                {category}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[#f5bc62] text-center p-4">
                        <div className="text-sm font-semibold text-amber-900">{t('menCategories.latestOffers')}</div>
                        <div className="text-lg font-bold text-gray-900 mb-5">{t('menCategories.offAccessories')}</div>
                        <Link href='/shop?category=men' className="bg-amber-900 text-white px-4 py-2 rounded text-sm hover:bg-amber-800 transition-colors">
                          {t('shopNow')}
                        </Link>
                        <div className="mt-3 text-center flex justify-center">
                          <Image
                            src="/images/men-accessories.png"
                            alt="Accessories"
                            className="w-[130px] h-[200px] rounded object-cover"
                            width={300}
                            height={200}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/shop?category=accessories" className="text-gray-600 hover:text-amber-900 transition-colors font-semibold ">
                {t('accessories')}
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-amber-900 font-semibold">
                {t('about')}
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-amber-900 transition-colors font-semibold">
                {t('contact')}
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-amber-900 transition-colors font-semibold">
                {t('blog')}
              </Link>


              {/* Pages Dropdown */}
                <div
                className="relative"
                onMouseEnter={() => setHoveredMenu("Pages")}
                onMouseLeave={() => setHoveredMenu(null)}
                tabIndex={0}
                onFocus={() => setHoveredMenu("Pages")}
                onBlur={(e) => {
                  // Only close if focus moves outside the dropdown
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setHoveredMenu(null);
                  }
                }}
                >
                <Link
                  href="/"
                  className="text-gray-600 hover:text-amber-900 transition-colors flex items-center font-semibold"
                  tabIndex={-1}
                >
                  {t('Pages')}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                {hoveredMenu === "Pages" && (
                  <div
                  className="absolute top-full -left-60 -right-60 bg-white shadow-lg border-b-5 border-b-orange-300 p-6 z-50"
                  onMouseEnter={() => setHoveredMenu("Pages")}
                  onMouseLeave={() => setHoveredMenu(null)}
                  >
                  <div>
                    <div>
                    <h3 className="font-semibold text-gray-900 mb-3">{t("pages.allPages")}</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {Pages.map((page) => (
                      <li key={page.name}>
                        <Link
                        href={`${page.path}`}
                        className="text-gray-600 hover:text-amber-900 transition-colors"
                        >
                        {page.name}
                        </Link>
                      </li>
                      ))}
                    </ul>
                    </div>
                  </div>
                  </div>
                )}
                </div>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-5">
              <button onClick={toggleLang} className="text-gray-700 hover:text-amber-900 transition-colors font-bold cursor-pointer">
                {lang === 'ar' ? 'English' : 'العربية'}
              </button>
              <Link href="/wishlist" className="text-gray-700 hover:text-amber-900 transition-colors">
                <Heart className="w-5 h-5" />
              </Link>
              <Link href="/cart" className="text-gray-700 hover:text-amber-900 transition-colors">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {state.itemCount > 0 && (
                    <span
                      className="absolute -top-2 -right-2 bg-amber-900 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
                    >
                      {state.itemCount}
                    </span>
                )}
                </div>
              </Link>
              <Link href="/account" className="text-gray-700 hover:text-amber-900 transition-colors">
                <User className="w-5 h-5" />
              </Link>
              <button onClick={toggleMenu} className="lg:hidden text-gray-700 hover:text-amber-900 transition-colors">
                <Menu className="w-5 h-5" />
              </button>

            </div>
            
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute bg-white border-t w-full top-[90%]">
            <div className="px-4 py-2 space-y-2">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-amber-900">
                {t('home')}
              </Link>
              <Link href="/shop" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-amber-900">
                {t('shop')}
              </Link>
                {/* Mobile Women Dropdown */}
                <div className="block">
                <button
                  className="w-full flex justify-between items-center py-2 text-gray-700 hover:text-amber-900 focus:outline-none"
                  onClick={() =>
                  setHoveredMenu(hoveredMenu === "women-mobile" ? null : "women-mobile")
                  }
                  aria-expanded={hoveredMenu === "women-mobile"}
                  aria-controls="mobile-women-dropdown"
                >
                  <span>{t('women')}</span>
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${hoveredMenu === "women-mobile" ? "rotate-180" : ""}`} />
                </button>
                {hoveredMenu === "women-mobile" && (
                  <div id="mobile-women-dropdown" className="pl-4 pb-2">
                  <ul className="space-y-1">
                    {womenCategories.map((category) => (
                    <li key={category}>
                      <Link
                      href={`/shop?category=${category.toLowerCase()}`}
                      className="block py-1 text-gray-600 hover:text-amber-900"
                      onClick={() => setIsMenuOpen(false)}
                      >
                      {category}
                      </Link>
                    </li>
                    ))}
                  </ul>
                  </div>
                )}
                </div>
                {/* Mobile Men Dropdown */}
                <div className="block">
                <button
                  className="w-full flex justify-between items-center py-2 text-gray-700 hover:text-amber-900 focus:outline-none"
                  onClick={() =>
                  setHoveredMenu(hoveredMenu === "men-mobile" ? null : "men-mobile")
                  }
                  aria-expanded={hoveredMenu === "men-mobile"}
                  aria-controls="mobile-men-dropdown"
                >
                  <span>{t('men')}</span>
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${hoveredMenu === "men-mobile" ? "rotate-180" : ""}`} />
                </button>
                {hoveredMenu === "men-mobile" && (
                  <div id="mobile-men-dropdown" className="pl-4 pb-2">
                  <ul className="space-y-1">
                    {menCategories.map((category) => (
                    <li key={category}>
                      <Link
                      href={`/shop?category=${category.toLowerCase()}`}
                      className="block py-1 text-gray-600 hover:text-amber-900"
                      onClick={() => setIsMenuOpen(false)}
                      >
                      {category}
                      </Link>
                    </li>
                    ))}
                  </ul>
                  </div>
                )}
                </div>
              <Link href="/shop?category=accessories" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-amber-900">
                {t('accessories')}
              </Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block py-2 text-amber-900 font-medium">
                {t('about')}
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-amber-900">
                {t('contact')}
              </Link>
              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-amber-900">
                {t('blog')}
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header