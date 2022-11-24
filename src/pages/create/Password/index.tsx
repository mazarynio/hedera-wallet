import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import BtnBack from '../components/BtnBack';
import Register from '../components/Register';

import './Password.css';


// import I18Next from '../../i18n';

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


const Index = () => {

  const { t } = useTranslation();


  return (
    <div className='password'>
        <div className='password_wrap-btn'>
          <BtnBack />
        </div>
        <div className='password_box'>
            <div className='box_content'>
              <svg width="41" height="53" viewBox="0 0 41 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 53C4.125 53 2.94833 52.5108 1.97 51.5325C0.99 50.5525 0.5 49.375 0.5 48V23C0.5 21.625 0.99 20.4475 1.97 19.4675C2.94833 18.4892 4.125 18 5.5 18H8V13C8 9.54167 9.21917 6.59333 11.6575 4.155C14.0942 1.71833 17.0417 0.5 20.5 0.5C23.9583 0.5 26.9067 1.71833 29.345 4.155C31.7817 6.59333 33 9.54167 33 13V18H35.5C36.875 18 38.0525 18.4892 39.0325 19.4675C40.0108 20.4475 40.5 21.625 40.5 23V48C40.5 49.375 40.0108 50.5525 39.0325 51.5325C38.0525 52.5108 36.875 53 35.5 53H5.5ZM20.5 40.5C21.875 40.5 23.0525 40.0108 24.0325 39.0325C25.0108 38.0525 25.5 36.875 25.5 35.5C25.5 34.125 25.0108 32.9475 24.0325 31.9675C23.0525 30.9892 21.875 30.5 20.5 30.5C19.125 30.5 17.9483 30.9892 16.97 31.9675C15.99 32.9475 15.5 34.125 15.5 35.5C15.5 36.875 15.99 38.0525 16.97 39.0325C17.9483 40.0108 19.125 40.5 20.5 40.5ZM13 18H28V13C28 10.9167 27.2708 9.14583 25.8125 7.6875C24.3542 6.22917 22.5833 5.5 20.5 5.5C18.4167 5.5 16.6458 6.22917 15.1875 7.6875C13.7292 9.14583 13 10.9167 13 13V18Z" fill="#FAFAFA"/>
              </svg>
              <p className='content_sub-heading-1'>{t("Password.passwordInfo")}</p>
              <Register/>
            </div>
        </div>
        {/* <I18Next/> */}
    </div>
  )
}

export default Index