import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import OptionCard from "../../../common/base/OptionCard";
import { SoftwareOptions } from "../../../domain/SoftwareOptions";
import BtnBack from "../components/BtnBack";
import './Software.css'


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



const Software = () => {
  const { t } = useTranslation();
  
  return (
    <div className='software'>
        <div>
         <BtnBack />
        </div>
        <h1 className='heading-1'>{t("Software.title")}</h1>
        <div>
        {Array.from(SoftwareOptions.values()).filter((option) => option.supported).map((softwareoption1) => (
             <OptionCard 
              key={softwareoption1.id}
              title={softwareoption1.title}
              desc={softwareoption1.description}
              route={softwareoption1.route}
             />
          ))}
        
        </div>
    </div>
  )
}

export default Software