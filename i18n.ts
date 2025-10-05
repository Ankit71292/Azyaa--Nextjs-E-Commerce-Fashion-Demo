
// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// استيراد كل ملفات الترجمة (العربية)
import arAbout from './locales/ar/about.json';
import arAccount from './locales/ar/account.json';
import arBlogPostPage from './locales/ar/blogPostPage.json';
import arCart from './locales/ar/cart.json';
import arCheckout from './locales/ar/checkout.json';
import arCompleteProfile from './locales/ar/completeProfile.json';
import arContact from './locales/ar/contact.json';
import arFaqs from './locales/ar/faqs.json';
import arFooter from './locales/ar/footer.json';
import arForgotPassword from './locales/ar/forgotPassword.json';
import arHeader from './locales/ar/header.json';
import arHome from './locales/ar/home.json';
import arOrderCompleted from './locales/ar/orderCompleted.json';
import arProductDetails from './locales/ar/productDetails.json';
import arResetPassword from './locales/ar/resetPassword.json';
import arShop from './locales/ar/shop.json';
import arSignIn from './locales/ar/signIn.json';
import arSignUp from './locales/ar/signUp.json';
import arVerifyCode from './locales/ar/verifyCode.json';
import arWishList from './locales/ar/wishList.json';

// استيراد كل ملفات الترجمة (الإنجليزية)
import enAbout from './locales/en/about.json';
import enAccount from './locales/en/account.json';
import enBlogPostPage from './locales/en/blogPostPage.json';
import enCart from './locales/en/cart.json';
import enCheckout from './locales/en/checkout.json';
import enCompleteProfile from './locales/en/completeProfile.json';
import enContact from './locales/en/contact.json';
import enFaqs from './locales/en/faqs.json';
import enFooter from './locales/en/footer.json';
import enForgotPassword from './locales/en/forgotPassword.json';
import enHeader from './locales/en/header.json';
import enHome from './locales/en/home.json';
import enOrderCompleted from './locales/en/orderCompleted.json';
import enProductDetails from './locales/en/productDetails.json';
import enResetPassword from './locales/en/resetPassword.json';
import enShop from './locales/en/shop.json';
import enSignIn from './locales/en/signIn.json';
import enSignUp from './locales/en/signUp.json';
import enVerifyCode from './locales/en/verifyCode.json';
import enWishList from './locales/en/wishList.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
    ar: {
      about: arAbout,
      account: arAccount,
      blogPostPage: arBlogPostPage,
      cart: arCart,
      checkout: arCheckout,
      completeProfile: arCompleteProfile,
      contact: arContact,
      faqs: arFaqs,
      footer: arFooter,
      forgotPassword: arForgotPassword,
      header: arHeader,
      home: arHome,
      orderCompleted: arOrderCompleted,
      productDetails: arProductDetails,
      resetPassword: arResetPassword,
      shop: arShop,
      signIn: arSignIn,
      signUp: arSignUp,
      verifyCode: arVerifyCode,
      wishList: arWishList,
    },
    en: {
      about: enAbout,
      account: enAccount,
      blogPostPage: enBlogPostPage,
      cart: enCart,
      checkout: enCheckout,
      completeProfile: enCompleteProfile,
      contact: enContact,
      faqs: enFaqs,
      footer: enFooter,
      forgotPassword: enForgotPassword,
      header: enHeader,
      home: enHome,
      orderCompleted: enOrderCompleted,
      productDetails: enProductDetails,
      resetPassword: enResetPassword,
      shop: enShop,
      signIn: enSignIn,
      signUp: enSignUp,
      verifyCode: enVerifyCode,
      wishList: enWishList,
    },
    },
    lng: 'ar', // اللغة الافتراضية عند أول تشغيل
    fallbackLng: 'ar',
    supportedLngs: ['en', 'ar'],
    debug: false,
    interpolation: {
      escapeValue: false, // مهم لعدم كسر React
    },
    react: {
      useSuspense: false, // يمنع ظهور المفاتيح قبل النص
    },
  });

export default i18n;

