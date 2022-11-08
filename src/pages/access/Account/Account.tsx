import type { AccountId, PublicKey } from "@hashgraph/sdk";
import AccountIdInput from "../../../common/base/AccountIdInput";
// import { LedgerHardwareWallet } from "../../../domain/wallet/hardware-ledger";
import { Wallet } from "../../../domain/wallet/abstract";
import BtnBack from "../../create/components/BtnBack";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import "./Account.css"

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


const Account = () => {

  const { t } = useTranslation();

  return (
    <div className="account">
      <div>
        <BtnBack />
      </div>
      <h1 className='heading-1'>{t('Account.HederaAccount')}</h1>
      <form>
        <div>
          <span>{t("Account.EnterAccountId")}</span>
        </div>
        <AccountIdInput />
      </form>
    </div>
  )
}

export default Account