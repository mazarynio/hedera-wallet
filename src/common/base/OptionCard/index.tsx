import { Link } from 'react-router-dom';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import './OptionCard.css';


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
    route?: string
}


const OptionCard = ({title, desc, route}: OptionCardProps) => {
  const { t } = useTranslation();
 
  return (
    <div className='wrap-card'>
      <Link to={route ? route : ''}>
        <div className='card-content'>
          <div>
            <h3>{t(`${title}`)}</h3>
          </div>
          <div>
            <p>
            {t(`${desc}`)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default OptionCard