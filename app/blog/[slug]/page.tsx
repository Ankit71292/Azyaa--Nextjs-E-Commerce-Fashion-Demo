
"use client"
import {
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Clock,
  Calendar,
 
} from "lucide-react"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import Image from "next/image"
import BlogCard from "@/components/BlogCard"
import FeaturesSection from "@/components/FeaturesSection"
import { useTranslation } from "react-i18next"
import { blogs } from '@/data/BlogsSectionData'
import { useLang } from "@/contexts/LangContext"
import Link from "next/link"


const blogPostData = {
  title: {
    en: "Fall Fashion Frenzy: The Ultimate Style Guide",
    ar: "جنون أزياء الخريف: الدليل النهائي للأناقة"
  },
  slug: "fall-fashion-frenzy-the-ultimate-style-guide",
  date: {
    en: "24 March 2024",
    ar: "24 مارس 2024"
  },
  readTime: 12,
  author: {
    en: "Jenny Alexander",
    ar: "جيني ألكسندر"
  },
  authorImage: "https://i.pinimg.com/1200x/75/c2/e1/75c2e19786dbf383db8cec3aa2f02ea1.jpg",
  heroImage: "https://i.pinimg.com/736x/d6/bc/ce/d6bcce4be1856a743ff29adca04d49ac.jpg",
  tags: {
    en: ["Fashion", "Trends", "Style"],
    ar: ["موضة", "اتجاهات", "أناقة"]
  },
  content: {
    intro: {
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ar: "لوريم إيبسوم هو نص تجريبي يُستخدم عادةً في صناعة الطباعة وتصميم المواقع. يوضح هذا المقطع أهمية الموضة ودورها في الحياة اليومية، حيث تمنح الأفراد فرصة للتعبير عن شخصياتهم وأذواقهم المختلفة."
    },
    section1: {
      title: {
        en: "Fashion Trends Throughout the Year",
        ar: "اتجاهات الموضة على مدار العام"
      },
      content: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        ar: "لوريم إيبسوم هو نص يُستخدم كمحتوى تجريبي يوضح كيف تتغير صيحات الموضة باختلاف الفصول. فالألوان الزاهية تناسب الصيف، بينما الطبقات والملابس الثقيلة تتناسب مع الشتاء. الموضة في كل موسم تعكس روح الفترة وتساعد على التجديد المستمر في الأسلوب الشخصي."
      },
      image1: "https://i.pinimg.com/736x/3d/b8/f3/3db8f3b6a76d2d8f90392bdaece8a4fd.jpg",
      image2: "https://i.pinimg.com/736x/b9/a2/da/b9a2daf7d703641006e4314ebe463629.jpg"
    },
    section2: {
      title: {
        en: "Decoding the Latest Fashion Shows",
        ar: "تحليل أحدث عروض الأزياء"
      },
      content1: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        ar: "لوريم إيبسوم نص تجريبي يوضح كيف يمكننا فهم الرسائل التي يقدمها المصممون من خلال عروض الأزياء العالمية، والتي غالبًا ما تحدد توجهات الموضة للمواسم القادمة."
      },
      content2: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ar: "تقدم عروض الأزياء أبرز القطع الجديدة، والأفكار الإبداعية التي تلفت الأنظار، لتكون مصدر إلهام لعشاق الموضة حول العالم."
      },
      content3: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ar: "غالبًا ما تُسلط العروض الضوء على الألوان والخامات الأكثر رواجًا، والتي تصبح فيما بعد جزءًا أساسيًا من الموضة السائدة."
      },
      content4: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ar: "كما توضح هذه العروض كيف يمكن دمج الأزياء الراقية مع الحياة اليومية بأسلوب عصري وجذاب، مما يساعد على تطوير الذوق الشخصي."
      }
    },
    section3: {
      title: {
        en: "Crafting Your Own Fashion",
        ar: "ابتكار أسلوبك الخاص"
      },
      content: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ar: "لوريم إيبسوم نص تجريبي يوضح أهمية أن يكون لكل شخص بصمته الخاصة في الموضة. فبدلاً من التقليد الكامل للآخرين، يمكنك إضافة لمساتك الفريدة التي تجعل إطلالتك أكثر تميزًا وتعكس هويتك الحقيقية."
      },
      image1: "https://i.pinimg.com/736x/6f/79/fb/6f79fb962e4894950cb4431fbfd4874b.jpg"
    },
    section4: {
      title: {
        en: "Learning from Fashion's Digital Elite",
        ar: "التعلم من نخبة الموضة الرقمية"
      },
      content: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ar: "لوريم إيبسوم نص تجريبي يوضح كيف أصبح المؤثرون على وسائل التواصل الاجتماعي مصدرًا مهمًا للإلهام في عالم الموضة. من خلال متابعة تجاربهم وأفكارهم، يمكن للأشخاص تطوير ذوقهم الخاص والاستفادة من نصائح عملية ومبتكرة."
      }
    }
  }
}


export default function BlogPostPage() {
  const { t, i18n } = useTranslation("blogPostPage")
  const { dir } = useLang()

  const categories = [
  { name: t("categories.fashion")},
  { name: t("categories.trends")},
  { name: t("categories.style")},
  { name: t("categories.tips")},
  { name: t("categories.jackets")},
  { name: t("categories.coats")},
  { name: t("categories.dresses")},
  { name: t("categories.sweater")},
  { name: t("categories.accessories")},
  { name: t("categories.jewelry")}
]

  return (
    <div className="min-h-screen ">
      {/* Page Header */}
      <div className="bg-gray-50 py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 text-center mb-5">{t("pageHeader.title")}</h1>
          <Breadcrumb>
            <Link href="/" className="text-gray-600 font-semibold hover:underline text-md">{t("pageHeader.home")}</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/blog" className="text-amber-900 font-semibold text-md">{t("pageHeader.blog")}</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href={`/blog/${blogPostData.slug}`} className="text-amber-900 font-semibold text-md">{blogPostData.title[i18n.language as "en" | "ar"]}</Link>
          </Breadcrumb>
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white overflow-hidden">
              {/* Hero Image */}
              <div className="relative">
                <Image
                  src={blogPostData.heroImage}
                  alt={blogPostData.title[i18n.language as "en" | "ar"]}
                  className="w-full h-96 object-cover"
                  width={800}
                  height={400}
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {(blogPostData.tags[i18n.language as "en" | "ar"] || []).map((tag, index) => (
                    <span key={index} className="bg-[#f5bc62] text-gray-900 px-3 py-2  text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Header */}
              <div className="p-8">
                <h1 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
                  {blogPostData.title[i18n.language as "en" | "ar"]}
                </h1>

                {/* Author Info */}
                <div className="flex md:flex-row flex-col gap-5 items-center md:justify-between mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <Image
                      src={blogPostData.authorImage}
                      alt={blogPostData.author[i18n.language as "en" | "ar"]}
                      className="w-12 h-12 rounded-full object-cover"
                      width={800}
                      height={400}
                    />
                    <div>
                      <p className="text-xl text-gray-600">
                        {t("author.writtenBy")} <span className="font-medium text-xl text-gray-900">{blogPostData.author[i18n.language as "en" | "ar"]}</span>
                      </p>
                      <div className="flex items-center gap-4 text-gray-500">
                        <span className="flex items-center gap-1 text-md">
                          <Calendar className="w-5 h-5" />
                          {blogPostData.date[i18n.language as "en" | "ar"]}
                        </span>
                        <span className="flex items-center gap-1 text-md">
                          <Clock className="w-5 h-5" />
                          {blogPostData.readTime} {t("author.minRead")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Social Share */}
                  <div className="flex items-center gap-2">
                    <span className="text-md text-gray-500 mr-2">24 {t("share.shares")}</span>
                    <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose max-w-none relative">
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {blogPostData.content.intro[i18n.language as "en" | "ar"]}</p>
                  {/* Section 1 */}
                  <div className="mb-8" id="section-1">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">{blogPostData.content.section1.title[i18n.language as "en" | "ar"]}</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{blogPostData.content.section1.content[i18n.language as "en" | "ar"]}</p>
                    <div className="lg:grid lg:grid-cols-2 grid-cols-1 gap-5">
                      <Image
                        src={blogPostData.content.section1.image1}
                        alt="Fashion content"
                        className="w-full h-96 mb-5 object-cover"
                        width={800}
                        height={400}
                      />
                      <Image
                        src={blogPostData.content.section1.image2}
                        alt="Fashion content"
                        className="w-full h-96 object-cover"
                        width={800}
                        height={400}
                      />
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="mb-8" id="section-2">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">{blogPostData.content.section2.title[i18n.language as "en" | "ar"]}</h2>
                    <p className="text-gray-700 leading-relaxed mb-4 relative flex">
                      <div className={`${ dir === "rtl" ? "ml-3" : "mr-3"} inline-block py-1`}>
                        <div className="w-4 h-4 bg-[#f5bc62] absolute rounded-full top-2 -left-1 right-2 border border-white"/>
                        <div className="w-5 h-5 bg-amber-900 rounded-full"/>
                      </div>
                      {blogPostData.content.section2.content1[i18n.language as "en" | "ar"]}</p>
                    <p className="text-gray-700 leading-relaxed mb-4 relative flex">
                      <div className={`${ dir === "rtl" ? "ml-3" : "mr-3"} inline-block py-1`}>
                        <div className="w-4 h-4 bg-[#f5bc62] absolute rounded-full top-2 -left-1 right-2 border border-white"/>
                        <div className="w-5 h-5 bg-amber-900 rounded-full"/>
                      </div>
                      {blogPostData.content.section2.content2[i18n.language as "en" | "ar"]}</p>
                    <p className="text-gray-700 leading-relaxed mb-4 relative flex">
                      <div className={`${ dir === "rtl" ? "ml-3" : "mr-3"} inline-block py-1`}>
                        <div className="w-4 h-4 bg-[#f5bc62] absolute rounded-full top-2 -left-1 right-2 border border-white"/>
                        <div className="w-5 h-5 bg-amber-900 rounded-full"/>
                      </div>
                      {blogPostData.content.section2.content3[i18n.language as "en" | "ar"]}</p>
                    <p className="text-gray-700 leading-relaxed mb-4 relative flex">
                      <div className={`${ dir === "rtl" ? "ml-3" : "mr-3"} inline-block py-1`}>
                        <div className="w-4 h-4 bg-[#f5bc62] absolute rounded-full top-2 -left-1 right-2 border border-white"/>
                        <div className="w-5 h-5 bg-amber-900 rounded-full"/>
                      </div>
                      {blogPostData.content.section2.content4[i18n.language as "en" | "ar"]}</p>
                  </div>

                  {/* Also Read Section */}
                  <div className="my-8 p-4 py-10 bg-amber-950">
                    <p className="font-semibold text-xl text-[#f5bc62] mb-2">{t("alsoRead.title")}</p>
                    <a href="#" className="text-white hover:underline text-xl">{t("alsoRead.link")}</a>
                  </div>

                  {/* Section 3 */}
                  <div className="mb-8" id="section-3">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">{blogPostData.content.section3.title[i18n.language as "en" | "ar"]}</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{blogPostData.content.section3.content[i18n.language as "en" | "ar"]}</p>
                    <Image
                      src={blogPostData.content.section3.image1}
                      alt="Fashion content"
                      className="w-full h-96 object-cover"
                      width={800}
                      height={400}
                    />
                  </div>

                  {/* Section 4 */}
                  <div className="mb-8" id="section-4">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">{blogPostData.content.section4.title[i18n.language as "en" | "ar"]}</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{blogPostData.content.section4.content[i18n.language as "en" | "ar"]}</p>
                  </div>
                </div>


                {/* Author Bio */}
                <div className="mt-12 p-10 bg-[#f5bc62]">
                  <div className="flex md:items-start md:flex-row flex-col rounded-full gap-4">
                    <Image
                      src={blogPostData.authorImage}
                      alt={blogPostData.author[i18n.language as "en" | "ar"]}
                      className="w-20 h-20 rounded-full object-cover"
                      width={400}
                      height={400}
                    />
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900 mb-2">{blogPostData.author[i18n.language as "en" | "ar"]}</h3>
                      <p className="text-gray-700 text-md font-semibold leading-relaxed">
                        {blogPostData.content.section4.content[i18n.language as "en" | "ar"]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
               {/* Categories Filter */}
              <div className="p-6 border-b">
                <h3 className="font-semibold text-xl text-gray-900 mb-4">{t("sidebar.filterByCategories")}</h3>
                <div className="space-y-2 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center bg-gray-100 p-2 justify-between py-1">
                      <Link href={`/shop?category=${category.name}`} className="text-md text-sm font-semibold text-gray-600 hover:text-amber-900 cursor-pointer transition-colors">
                        {category.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table of Contents */}
              <div className="p-6 border-b">
                <h3 className="font-semibold text-xl text-gray-900 mb-4">{t("sidebar.tableOfContent")}</h3>
                <ul className="space-y-2">
                  {[
                    { id: "section-1", title: blogPostData.content.section1.title },
                    { id: "section-2", title: blogPostData.content.section2.title },
                    { id: "section-3", title: blogPostData.content.section3.title },
                    { id: "section-4", title: blogPostData.content.section4.title },
                  ].map((section) => (
                    <li key={section.id}>
                      <Link
                        href={`#${section.id}`}
                        className="text-md font-semibold text-gray-600 hover:text-amber-900 transition-colors block py-1"
                      >
                        {section.title[i18n.language as "en" | "ar"]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Advertisement */}
              <div className="bg-[#f5bc62] p-6 text-center h-96 relative flex flex-col items-center">
                <h3 className="font-bold text-gray-900 mb-2">{t("sidebar.adTitle")}</h3>
                <Link href="/shop" className="bg-gray-900 text-white px-6 py-2 cursor-pointer hover:bg-gray-800 transition-colors">
                  {t("sidebar.shopNow")}
                </Link>

                <Image
                  src="/images/hero.png"
                  alt="Advertisement"
                  className="w-60 h-64 absolute bottom-0 object-cover"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <p className="text-gray-900 font-semibold text-xl mb-5">{t("relatedPosts.title")}</p>
            <h2 className="text-4xl font-semibold text-gray-900">{t("relatedPosts.subtitle")}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <BlogCard key={post.id} blog={post} />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <FeaturesSection />
    </div>
  )
}