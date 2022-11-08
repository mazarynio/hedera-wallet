import { useNavigate } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import BtnBack from "../../create/components/BtnBack"
import LedgerInfo from "../components/LedgerInfo"
import {Button} from "../../../common/base/Button"

import "./Ledger.css"

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


const Ledger = () => {

  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/access/account");
  }

  return (
    <div className='ledger'>
      <div>
        <BtnBack />
      </div>
      <h1 className='heading-1'>{t("Ledger.title")}</h1>
      <div>
         <LedgerInfo />
         <Button 
          handleClick={handleClick} 
          >
            {t("Ledger.Continue")}
          </Button>
      </div>
    </div>
  )
}

export default Ledger