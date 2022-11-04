import React, { useState } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import './Button.css'


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {useSuspense: false}
  });


export type ButtonProps = {
    title: String
    desc: String
    route?: string
}


const Button: React.FC<{handleClick?: React.MouseEventHandler<HTMLElement>}> = ({handleClick}) => {
  const [disabled, setDisabled] = useState(false);
  
  const { t } = useTranslation();
  return <button 
  className='btn-action'
  onClick={handleClick}
  type="button"
  disabled={disabled}
  
  >
    {t("Ledger.Continue")}
  </button>;
}


export default Button
