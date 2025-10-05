// components/DirectionController.tsx
'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function DirectionController() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return null;
}
// This component sets the text direction based on the current language.