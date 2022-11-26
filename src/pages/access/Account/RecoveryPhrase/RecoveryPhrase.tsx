import React, { useEffect, useState } from "react";

import{ Mnemonic } from "@hashgraph/sdk";

import { useNavigate } from "react-router-dom";

import BtnBack from "../../../create/components/BtnBack";
import Button from "../../../../common/base/Button";
import MnemonicInput from "../../../../common/base/MnemonicInput";

import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18n from "i18next";

import "./RecoveryPhrase.css";

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


const RecoveryPhrase = () => {

    const { t } = useTranslation();

    const [mnemonicPhrase, setMnemonicPhrase] = useState<any>([]);
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(true);
  
    useEffect(() => {
      Mnemonic.generate12().then((mnemonic) => setMnemonicPhrase(mnemonic))
    },[])
    
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            if(navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(mnemonicPhrase);
            }
            setIsCopied(true);
            console.log(isCopied);
            setDisabled(false);
        } catch (e) {
            console.error('e', e);
        } 
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/access/account/confirm-recovery");
    }
    

  return (
    <div className="recoveryPhrase">
        <div className="recoveryPhrase_wrap-btn">
        <BtnBack />
        </div>
        <div className='recoveryPhrase_box'>
            <div className='box_content'>
                <h1 className='content_heading-1'>{t('RecoveryPhrase.title')}</h1>
                <p className='content_sub-heading-1'>{t("RecoveryPhrase.instructions")}</p>
                <form onSubmit={handleSubmit}>
                    <MnemonicInput
                    mnemonicPhrase={[...mnemonicPhrase?.toString().split(' ')]}
                    readOnly
                    />
                    <div className="box_btns">
                        <Button 
                        handleClick={handleClick}
                        type="button"
                        >
                            {t("RecoveryPhrase.button.copy")}
                        </Button>
                        <Button
                        secondary
                        disabled={disabled}
                        >
                            {t("RecoveryPhrase.button.next")}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RecoveryPhrase