

'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import i18n from '@/i18n';

type Lang = 'en' | 'ar';

type LangContextType = {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lang') as Lang) || 'ar';
    }
    return 'ar';
  });

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    i18n.changeLanguage(newLang); // تغيير اللغة فعليًا
    localStorage.setItem('lang', newLang);
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }

    // مهم: نضمن أن i18n يبدأ باللغة المخزنة
    i18n.changeLanguage(lang);
  }, [lang, dir]);

  return (
    <LangContext.Provider value={{ lang, dir, toggleLang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = (): LangContextType => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};
