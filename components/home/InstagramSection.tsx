import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next';

const InstagramSection = () => {
  const { t } = useTranslation("home");

    const InstagramImages = [
        {
            id: 1,
            path: "https://i.pinimg.com/736x/27/cb/2e/27cb2ee024e8ce998923d6d8ef699fc2.jpg"
        },
        {
            id: 2,
            path: "https://i.pinimg.com/736x/e0/fd/fe/e0fdfec862b406370f805cdb7d3d1e91.jpg"
        },
        {
            id: 3,
            path: "https://i.pinimg.com/1200x/24/65/60/2465601b64678b1c5dc9f8cc81867e6b.jpg"
        },
        {
            id: 4,
            path: "https://i.pinimg.com/736x/a9/e6/c0/a9e6c00f39d5b56277dcec360feec5d7.jpg"
        },
        {
            id: 5,
            path: "https://i.pinimg.com/736x/4e/eb/87/4eeb87bf5846416ea6b1118fc8cde99f.jpg"
        }
    ]

  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-xl text-gray-500 mb-2">{t("instagram.subtitle")}</p>
            <h2 className="text-4xl font-semibold text-gray-900">{t("instagram.title")}</h2>
          </div>

          <div className="flex flex-row md:flex-nowrap flex-wrap gap-1 md:gap-4 justify-center">

            {InstagramImages.map((image) => (
            <div key={image.id} className="relative overflow-hidden group cursor-pointer md:h-56 h-80 w-full ">
              <Image
                src={image.path}
                alt="Instagram post 1"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}

export default InstagramSection