"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function SignUpPage() {
  const { t, i18n } = useTranslation("signUp")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreeTerms) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)

    // Redirect to complete profile or dashboard
    window.location.href = "/complete-profile"
  }

  const handleGoogleSignUp = () => {
    // Implement Google OAuth
    console.log("Google Sign Up")
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
              <h1 className="text-3xl font-semibold text-gray-900">{t("signUpTitle")}</h1>
              <p className="text-gray-500">{t("signUpDescription")}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-md font-semibold text-gray-700">
                    {t("firstName")}
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder={t("firstNamePlaceholder")}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="h-12 py-5 border-gray-300 focus:border-amber-800 focus:ring-amber-800"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-md font-semibold text-gray-700">
                    {t("lastName")}
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder={t("lastNamePlaceholder")}
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="h-12 border-gray-300 focus:border-amber-800 focus:ring-amber-800"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-md font-semibold text-gray-700">
                  {t("email")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 border-gray-300 focus:border-amber-800 focus:ring-amber-800"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-md font-semibold text-gray-700">
                  {t("password")}
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t("passwordPlaceholder")}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    className="h-12 border-gray-300 focus:border-amber-800 focus:ring-amber-800 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  className="border-amber-800 data-[state=checked]:bg-amber-800 cursor-pointer"
                />
                <Label htmlFor="terms" className="text-md text-gray-700">
                  {t("termsAgreement")}{" "}
                  <Link href="/terms" className="text-amber-800 hover:text-amber-900 underline">
                    {t("termsAndConditions")}
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-amber-800 hover:text-amber-900 underline">
                    {t("privacyPolicy")}
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isLoading || !agreeTerms}
                className="w-full h-12 bg-amber-800 hover:bg-amber-900 text-white font-medium disabled:opacity-50 rounded-none"
              >
                {isLoading ? t("creatingAccount") : t("signUpButton")}
              </Button>
            </form>

            {/* Divider */}
            <div className="text-center text-gray-500">{t("orSignUpWith")}</div>

            {/* Google Sign Up */}
            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignUp}
              className="w-full h-12 border-gray-300 hover:bg-gray-50 bg-transparent rounded-none cursor-pointer"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              {t("signUpWithGoogle")}
            </Button>

            <div className="text-center">
              <span className="text-gray-600 text-lg">{t("alreadyHaveAccount")}</span>
              <Link href="/sign-in" className="text-amber-800 hover:text-amber-900 font-medium underline">
                {t("signIn")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 relative bg-gray-100 md:block hidden">
        <Image src="https://i.pinimg.com/1200x/13/e2/ec/13e2ec6a3dbc5ea2420c9e1869a9f35f.jpg" alt="Fashion Model" fill className="object-cover" />

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
            {t("testimonialQuote")}
          </blockquote>
          <div>
            <div className="font-semibold text-gray-900">{t("testimonialName")}</div>
            <div className="text-gray-600">{t("testimonialRole")}</div>
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
