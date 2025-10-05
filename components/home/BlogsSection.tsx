
import React from "react";
import BlogCard from "../BlogCard";
import { useTranslation } from "react-i18next";
import { blogs } from "@/data/BlogsSectionData";


const BlogsSection = () => {
  const { t } = useTranslation("home");

  return (
    <>
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-xl text-gray-500 mb-2">{t("blog.subtitle")}</p>
            <h2 className="text-4xl font-semibold text-gray-900">
              {t("blog.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsSection;
