import React, { useContext, useEffect, useState } from "react";
import Button from "../../../../common/base/Button";
import MnemonicInput from "../../../../common/base/MnemonicInput";

import { useNavigate } from "react-router-dom";

import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18n from "i18next";
import BtnBack from "../../../create/components/BtnBack";
import { MnemonicContext } from "../../../..";

import "./ConfirmRecovery.css";
import MnemonicGuess from "../../../../common/base/MnemonicGuess";
import { nanoid } from "nanoid";

var shuffle = require('shuffle-array')

// TODO Confirm Recovery Phrase 
// TODO Persist 12-word Backup Phrase in global state.
// TODO Create feature to randomize the 12-word and select them according to right sequence.
// TODO Confirm and go to Success page if it's the right sequence or throw an error if it's not.

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

  

const ConfirmRecovery = () => {

    const { t } = useTranslation();

    const {mnemonicPhrase} = useContext(MnemonicContext);
    // const [isCopied, setIsCopied] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [randomArray, setRandomArray] = useState<any>([]);


    let word = ' '

    const [verifyPhrase, setVerifyPhrase] = useState<any>([
        
    ]);


    useEffect(() => {
      setRandomArray(mnemonicPhrase)
    },[])

  
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            if(navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(mnemonicPhrase);
            }
            // setIsCopied(true);
            // setDisabled(false);
        } catch (e) {
            console.error('e', e)
        } 
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/account/confirm-recovery");
    }
    

  return (
    <div className="confirmRecovery">
        <div className="confirmRecovery_wrap-btn">
          <BtnBack />
        </div>
        <div className='confirmRecovery_box'>
            <div className='box_content'>
                <h1 className='content_heading-1'>{t('ConfirmRecovery.title')}</h1>
                <p className='content_sub-heading-1'>{t("ConfirmRecovery.instructions")}</p>
                <form onSubmit={handleSubmit}>
                    <MnemonicInput
                    mnemonicPhrase={[...verifyPhrase?.toString()]}
                    readOnly
                    />
                    <MnemonicGuess
                    mnemonicPhrase={shuffle([...randomArray?.toString().split(' ')])}
                    readOnly
                    />
                    <div className="box_btns">
                        <Button 
                        handleClick={handleClick}
                        disabled={disabled}
                        type="button"
                        >
                            {t("ConfirmRecovery.button")}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ConfirmRecovery