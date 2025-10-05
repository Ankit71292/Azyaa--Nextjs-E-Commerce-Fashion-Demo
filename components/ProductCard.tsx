import { useCart } from "@/lib/cart-context";
import { Expand, Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

interface Product {
  id: number;
  name: {
    en: string;
    ar: string;
  };
  image?: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  color: string;
  size: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { i18n } = useTranslation();

   const { dispatch } = useCart()

  const addToCart = () => {
  dispatch({
    type: "ADD_ITEM",
    payload: {
      id: product.id,
      name: product.name,
      image: product.image || "/placeholder.svg",
      price: product.price,
      originalPrice: product.originalPrice,
      color: product.color,
      size: product.size,
    }
  })
  }

  return (
    <>
      <div
        key={product.id}
        className="min-w-[280px] bg-white overflow-hidden group relative transition-shadow"
      >
        <div className="relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name[i18n.language as "en" | "ar"]}
            width={300}
            height={400}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute w-18 h-8 flex justify-center items-center top-3 left-3 bg-amber-900 text-white text-md font-light px-2 py-1">
            {i18n.language === "ar" ? "خصم 25%" : "off 25%"}
          </div>
          <div className="flex-col gap-3 flex absolute top-3 right-5 lg:group lg:hidden group-hover:flex animate-in">
            <Link href='/wishlist' className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <Heart className="w-5 h-5 text-gray-600" />
            </Link>

            <Link href={`/product/${product.id}`} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <Expand className="w-5 h-5 text-gray-600" />
            </Link>

            <button onClick={addToCart} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-xl text-gray-900 mb-2">
            {product.name[i18n.language as "en" | "ar"]}
          </h3>
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
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
