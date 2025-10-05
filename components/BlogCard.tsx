import { useLang } from "@/contexts/LangContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

interface Blog {
  id: string | number;
  image: string;
  title: {
    en: string;
    ar: string;
  };
  date: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  link: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    const { i18n } = useTranslation();
    const { dir } = useLang();
  return (
    <>
      <article
        key={blog.id}
        className="bg-white overflow-hidden group transition-shadow"
      >
        <div className="relative">
          <Image
            src={blog.image}
            alt={blog.title[i18n.language as "en" | "ar"]}
            width={400}
            height={250}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className={`absolute w-fit h-12 flex items-center bottom-0 ${dir === "rtl" ? "right-0" : "left-0"} px-2 bg-[#f5bc62] text-gray-900 text-lg border-t-3 border-l-3 border-white font-medium`}>
            {blog.date[i18n.language as "en" | "ar"]}
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-3xl text-gray-900 mb-3 group-hover:text-amber-900 transition-colors">
            {blog.title[i18n.language as "en" | "ar"]}
          </h3>
          <p className="text-gray-600 text-md mb-4 line-clamp-3">
            {blog.description[i18n.language as "en" | "ar"]}
          </p>
          <Link href={blog.link}
            className="text-amber-900 text-md font-medium underline"
          >
            {i18n.language === "ar" ? "اقرأ المزيد" : "Read More"}
          </Link>
        </div>
      </article>
    </>
  );
};

export default BlogCard;
