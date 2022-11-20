import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import{ Mnemonic } from "@hashgraph/sdk";
// import { MnemonicSoftwareWallet } from "../../../domain/wallet/software-mnemonic";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import BtnBack from '../components/BtnBack';
import MnemonicInput from '../../../common/base/MnemonicInput';

import './Mnemonic.css'
// import { Wallet } from '../../../domain/wallet/abstract';
import Button from '../../../common/base/Button';


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

  const [mnemonicPhrase, setMnemonicPhrase] = useState<any>([]);

  useEffect(() => {
    Mnemonic.generate().then((mnemonic) => setMnemonicPhrase(mnemonic))
  },[])
  
  const navigate = useNavigate();

  function handleClick() {
    navigate("/create/mnemonic/verify");
  }

  return (
    <div className='mnemonic'>
      <div>
        <BtnBack />
      </div>
      <h1 className='heading-1'>{t("MnemonicPhrase.title")}</h1>
      <div>
        <form>
          <MnemonicInput
           mnemonicPhrase={[...mnemonicPhrase?.toString().split(' ')]}
           readOnly
          />
          <Button 
          handleClick={handleClick}
          >
            {t("MnemonicPhrase.create.button")}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Index
