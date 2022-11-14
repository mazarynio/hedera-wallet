import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import {nanoid} from 'nanoid'

import BtnBack from '../components/BtnBack'

import './MnemonicVerify.css'
import MnemonicInput from "../../../common/base/MnemonicInput";
import { useNavigate } from "react-router-dom";
import Button from "../../../common/base/Button";
import { useEffect, useState } from "react";
import { Mnemonic } from "@hashgraph/sdk";

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

  const navigate = useNavigate();

  function handleClick() {
    navigate("/create/mnemonic/verify");
  }

  const [verifyPhrase, setVerifyPhrase] = useState<any>([
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
    {
      id: nanoid(),
      word: ''  
    },
  ]);

  // useEffect(() => {
  //   setMnemonicPhrase([])
  // },[])

  return (
    <div className='mnemonic-verify'>
      <div>
        <BtnBack />
      </div>
      <h1 className='heading-1'>{t("Mnemonic.VerifyTitle")}</h1>
      <div>
        <form>
          <MnemonicInput
            verifyPhrase={[...verifyPhrase?.toString().split(' ')]}
          />
          <Button 
            handleClick={handleClick}
          >
            {t("Mnemonic.Verify")}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Index