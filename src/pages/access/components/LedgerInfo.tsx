import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import "./LedgerInfo.css"


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

const LedgerInfo = () => {

 const { t } = useTranslation();
  return (
    <ul className="wrap-ledger__info">
        <li>{t("Ledger.Instruction1")}</li>
        <li className="py-2">
            {t("Ledger.Instruction2")}
        </li>
        <li>{t("Ledger.Instruction3")}</li>
        <li>
            {t("Ledger.NoAccount")} {" "} 
            <a
                className="underline"
                href="https://launchbadge.com/blog/using-a-ledger-nano-to-create-your-hedera-account"
                target="_blank"
                rel="noreferrer"
            >
              {t("Ledger.ClickHere")}
        </a>
        </li>
        <li>
            {t("Ledger.LoginGuide")}  {" "}
            <a
                className="underline"
                href="https://launchbadge.com/blog/logging-in-with-your-ledger"
                target="_blank"
                rel="noreferrer"
            >
               {t("Ledger.ClickHere")}
            </a>
        </li>
    </ul>
  )
}

export default LedgerInfo