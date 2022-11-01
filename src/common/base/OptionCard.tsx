import { Routes, Route, Link } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


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


export type OptionCardProps = {
    title: String
    desc: String
}

const OptionCard = ({title, desc}: OptionCardProps) => {
  const { t } = useTranslation();
  return (
    <div>
        <div>
            <span>{t(`${title}`)}</span>
        </div>
        <div>
          {t(`${desc}`)}
        </div>
    </div>
  )
}

export default OptionCard