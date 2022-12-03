import React from 'react'

import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18n from "i18next";

import Button from '../../../../common/base/Button'

import './Success.css'
import { useNavigate } from 'react-router-dom';

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


const Success = () => {

  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/account/home");
  }

  return (
    <div className="success">
        <div className='success_box'>
            <div className='box_content'>
                <h1 className='content_heading-1'>{t('Success.title')}</h1>
                <svg width="85" height="84" viewBox="0 0 85 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.6663 49.5002L27.6038 40.4377C26.84 39.6738 25.9025 39.2918 24.7913 39.2918C23.6802 39.2918 22.708 39.7085 21.8747 40.5418C21.1108 41.3057 20.7288 42.2779 20.7288 43.4585C20.7288 44.6391 21.1108 45.6113 21.8747 46.3752L33.7497 58.2502C34.5136 59.014 35.4858 59.396 36.6663 59.396C37.8469 59.396 38.8191 59.014 39.583 58.2502L63.2288 34.6043C63.9927 33.8404 64.3747 32.9029 64.3747 31.7918C64.3747 30.6807 63.958 29.7085 63.1247 28.8752C62.3608 28.1113 61.3886 27.7293 60.208 27.7293C59.0275 27.7293 58.0552 28.1113 57.2913 28.8752L36.6663 49.5002ZM42.4997 83.6668C36.7358 83.6668 31.3191 82.5724 26.2497 80.3835C21.1802 78.1974 16.7705 75.2293 13.0205 71.4793C9.27051 67.7293 6.30245 63.3196 4.11634 58.2502C1.92745 53.1807 0.833008 47.764 0.833008 42.0002C0.833008 36.2363 1.92745 30.8196 4.11634 25.7502C6.30245 20.6807 9.27051 16.271 13.0205 12.521C16.7705 8.771 21.1802 5.80155 26.2497 3.61266C31.3191 1.42655 36.7358 0.333496 42.4997 0.333496C48.2636 0.333496 53.6802 1.42655 58.7497 3.61266C63.8191 5.80155 68.2288 8.771 71.9788 12.521C75.7288 16.271 78.6969 20.6807 80.883 25.7502C83.0719 30.8196 84.1663 36.2363 84.1663 42.0002C84.1663 47.764 83.0719 53.1807 80.883 58.2502C78.6969 63.3196 75.7288 67.7293 71.9788 71.4793C68.2288 75.2293 63.8191 78.1974 58.7497 80.3835C53.6802 82.5724 48.2636 83.6668 42.4997 83.6668Z" fill="#4385F5"/>
                </svg>
                <p className='content_sub-heading-1'>{t("Success.message")}</p>
                <Button
                handleClick={handleClick}
                >
                    {t("Success.button.goToTheWallet")}
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Success