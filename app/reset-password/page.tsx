"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, CheckCircle } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({})
  const { t, i18n } = useTranslation("resetPassword")
  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return t("form.subtitle")
    }
    return ""
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const passwordError = validatePassword(formData.password)
    const confirmError = formData.password !== formData.confirmPassword ? t("errors.confirmPassword") : ""

    setErrors({
      password: passwordError,
      confirmPassword: confirmError,
    })

    if (passwordError || confirmError) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSuccess(true)

    // Redirect to sign in after success
    setTimeout(() => {
      window.location.href = "/sign-in"
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">{t("success.title")}</h1>
            <p className="text-gray-600">{t("success.message")}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">{i18n.language === "ar" ? "أ" : "A"}</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">{i18n.language === "ar" ? "أزياء." : "Azyaa."}</span>
          </div>

          {/* Form Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold text-gray-900">{t("form.title")}</h1>
              <p className="text-gray-600 text-md">{t("form.subtitle")}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-md font-semibold text-gray-700">
                  {t("form.passwordLabel")}
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t("form.passwordPlaceholder")}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    className={`h-12 border-gray-300 focus:border-amber-800 focus:ring-amber-800 pr-12 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-md font-semibold text-gray-700">
                  {t("form.confirmPasswordLabel")}
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder={t("form.passwordPlaceholder")}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                    className={`h-12 border-gray-300 focus:border-amber-800 focus:ring-amber-800 pr-12 ${
                      errors.confirmPassword ? "border-red-500" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-none cursor-pointer bg-amber-800 hover:bg-amber-900 text-white font-medium"
              >
                {isLoading ? t("form.resettingButton") : t("form.resetButton")}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 relative bg-gray-100 md:block hidden">
        <Image src="https://i.pinimg.com/736x/57/64/9a/57649a5304d2e6f3f9e5d169d2b770f9.jpg" alt="Fashion Model" fill className="object-cover" />

        {/* Testimonial Overlay - Glassmorphism Style */}
        <div
          className="absolute bottom-0 left-0 right-0 p-8"
          style={{
            backdropFilter: "blur(12px)",
            background: "rgba(255, 255, 255, 0.18)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
          }}
        >
          <blockquote className="text-lg mb-4 text-gray-900 font-medium">
            {t("testimonial.quote")}
          </blockquote>
          <div>
            <div className="font-semibold text-gray-900">{t("testimonial.author")}</div>
            <div className="text-gray-600">{t("testimonial.role")}</div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-between mt-4">
            <div className="w-28 h-1 bg-yellow-500 rounded"></div>
            <div className="w-28 h-1 bg-gray-300 rounded"></div>
            <div className="w-28 h-1 bg-gray-300 rounded"></div>
            <div className="w-28 h-1 bg-gray-300 rounded"></div>
            <div className="w-28 h-1 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
