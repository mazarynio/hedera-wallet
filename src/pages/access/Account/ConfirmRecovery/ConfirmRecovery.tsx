import React, { useContext, useEffect, useState } from "react";

import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18n from "i18next";

import BtnBack from "../../../create/components/BtnBack";
import Button from "../../../../common/base/Button";
import MnemonicInput from "../../../../common/base/MnemonicInput";
import MnemonicGuess from "../../../../common/base/MnemonicGuess";

import { MnemonicContext } from "../../../..";

import "./ConfirmRecovery.css";
import { useNavigate } from "react-router-dom";


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

  

const ConfirmRecovery =() => {

    const { t } = useTranslation();

    var shuffle = require('shuffle-array');

    const {mnemonicPhrase} = useContext(MnemonicContext);
  
    const randomArray = mnemonicPhrase;

    const [arrayRandom] = useState(shuffle([...randomArray?.toString().split(' ')]));

    const [disabled, setDisabled] = useState<boolean>(true);

    const [word1, setWord1] = useState<string>('');
    const [word2, setWord2] = useState<string>('');
    const [word3, setWord3] = useState<string>('');
    const [word4, setWord4] = useState<string>('');
    const [word5, setWord5] = useState<string>('');
    const [word6, setWord6] = useState<string>('');
    const [word7, setWord7] = useState<string>('');
    const [word8, setWord8] = useState<string>('');
    const [word9, setWord9] = useState<string>('');
    const [word10, setWord10] = useState<string>('');
    const [word11, setWord11] = useState<string>('');
    const [word12, setWord12] = useState<string>('');

    const [verifyPhrase, setVerifyPhrase] = useState<Array<string>>([
        word1,
        word2,
        word3,
        word4,
        word5,
        word6,
        word7,
        word8,
        word9,
        word10,
        word11,
        word12  
    ]);

    const [isThisWordSelected, setIsThisWordSelected] = useState<string>();
  
    const navigate = useNavigate();

    // DONE: Backup Phrase validation Word Order. When valid, disabled submit button (false).

    const handleWordClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if(e?.currentTarget?.textContent != null) {
        if(word1 === '' && word2 !== e.currentTarget.textContent && word3 !== e.currentTarget.textContent && word4 !== e.currentTarget.textContent && word5 !== e.currentTarget.textContent && word6 !== e.currentTarget.textContent && word7 !== e.currentTarget.textContent && word8 !== e.currentTarget.textContent && word9 !== e.currentTarget.textContent && word10 !== e.currentTarget.textContent  && word11 !== e.currentTarget.textContent && word12 !== e.currentTarget.textContent || word1 === e.currentTarget.textContent) {
          if(e.currentTarget.textContent === word1) {
            setWord1('');
            console.log(e.currentTarget.textContent + "Come here");
            setIsThisWordSelected('');
            e.currentTarget.id = '0';
          } else {
            setWord1(e.currentTarget.textContent);
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected(e.currentTarget.textContent);
            e.currentTarget.id = 'selected';
          }
        } else if(word2 === '' && word1 !== e.currentTarget.textContent && word3 !== e.currentTarget.textContent && word4 !== e.currentTarget.textContent && word5 !== e.currentTarget.textContent && word6 !== e.currentTarget.textContent && word7 !== e.currentTarget.textContent && word8 !== e.currentTarget.textContent && word9 !== e.currentTarget.textContent && word10 !== e.currentTarget.textContent  && word11 !== e.currentTarget.textContent && word12 !== e.currentTarget.textContent || word2 === e.currentTarget.textContent) {
          if(e.currentTarget.textContent === word2) {
            setWord2('');
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected('');
            e.currentTarget.id = '1';
          } else {
            setWord2(e.currentTarget.textContent);
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected(e.currentTarget.textContent);
            e.currentTarget.id = 'selected';
          }
        } else if(word3 === '' && word1 !== e.currentTarget.textContent && word2 !== e.currentTarget.textContent && word4 !== e.currentTarget.textContent && word5 !== e.currentTarget.textContent && word6 !== e.currentTarget.textContent && word7 !== e.currentTarget.textContent && word8 !== e.currentTarget.textContent && word9 !== e.currentTarget.textContent && word10 !== e.currentTarget.textContent  && word11 !== e.currentTarget.textContent && word12 !== e.currentTarget.textContent || word3 === e.currentTarget.textContent) {
          if(e.currentTarget.textContent === word3) {
            setWord3('');
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected('');
            e.currentTarget.id = '2';
          } else {
            setWord3(e.currentTarget.textContent);
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected(e.currentTarget.textContent)
            e.currentTarget.id = 'selected';
          }
        } else if(word4 === '' && word1 !== e.currentTarget.textContent && word2 !== e.currentTarget.textContent && word3 !== e.currentTarget.textContent && word5 !== e.currentTarget.textContent && word6 !== e.currentTarget.textContent && word7 !== e.currentTarget.textContent && word8 !== e.currentTarget.textContent && word9 !== e.currentTarget.textContent && word10 !== e.currentTarget.textContent  && word11 !== e.currentTarget.textContent && word12 !== e.currentTarget.textContent || word4 === e.currentTarget.textContent) {
          if(e.currentTarget.textContent === word4) {
            setWord4('');
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected('');
            e.currentTarget.id = '3';
          } else {
            setWord4(e.currentTarget.textContent);
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected(e.currentTarget.textContent);
            e.currentTarget.id = 'selected';
          }
        } else if(word5 === '' && word1 !== e.currentTarget.textContent && word2 !== e.currentTarget.textContent && word3 !== e.currentTarget.textContent && word4 !== e.currentTarget.textContent && word6 !== e.currentTarget.textContent && word7 !== e.currentTarget.textContent && word8 !== e.currentTarget.textContent && word9 !== e.currentTarget.textContent && word10 !== e.currentTarget.textContent && word11 !== e.currentTarget.textContent && word12 !== e.currentTarget.textContent || word5 === e.currentTarget.textContent) {
          if(e.currentTarget.textContent === word5) {
            setWord5('');
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected('');
            e.currentTarget.id = '4';
          } else {
            setWord5(e.currentTarget.textContent);
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected(e.currentTarget.textContent);
            e.currentTarget.id = 'selected';
          }
        } else if(word6 === '' && word1 !== e.currentTarget.textContent && word2 !== e.currentTarget.textContent && word3 !== e.currentTarget.textContent && word4 !== e.currentTarget.textContent && word5 !== e.currentTarget.textContent && word7 !== e.currentTarget.textContent && word8 !== e.currentTarget.textContent && word9 !== e.currentTarget.textContent && word10 !== e.currentTarget.textContent && word11 !== e.currentTarget.textContent && word12 !== e.currentTarget.textContent || word6 === e.currentTarget.textContent) {
          if(e.currentTarget.textContent === word6 ) {
            setWord6('');
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected('');
            e.currentTarget.id = '5';
          } else {
            setWord6(e.currentTarget.textContent);
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected(e.currentTarget.textContent);
            e.currentTarget.id = 'selected';
          }
        } else if(word7 === '' && word1 !== e.currentTarget.textContent && word2 !== e.currentTarget.textContent && word3 !== e.currentTarget.textContent && word4 !== e.currentTarget.textContent && word5 !== e.currentTarget.textContent && word6 !== e.currentTarget.textContent && word8 !== e.currentTarget.textContent && word9 !== e.currentTarget.textContent && word10 !== e.currentTarget.textContent && word11 !== e.currentTarget.textContent && word12 !== e.currentTarget.textContent || word7 === e.currentTarget.textContent) {
          if(e.currentTarget.textContent === word7) {
            setWord7('');
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected('');
            e.currentTarget.id = '6';
          } else {
            setWord7(e.currentTarget.textContent);
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected(e.currentTarget.textContent);
            e.currentTarget.id = 'selected';
          }
        } else if(word8 === '' && word1 !== e.currentTarget.textContent && word2 !== e.currentTarget.textContent && word3 !== e.currentTarget.textContent && word4 !== e.currentTarget.textContent && word5 !== e.currentTarget.textContent && word6 !== e.currentTarget.textContent && word7 !== e.currentTarget.textContent && word9 !== e.currentTarget.textContent && word10 !== e.currentTarget.textContent && word11 !== e.currentTarget.textContent && word12 !== e.currentTarget.textContent || word8 === e.currentTarget.textContent) {
          if(e.currentTarget.textContent === word8) {
            setWord8('');
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected('');
            e.currentTarget.id = '7';
          } else {
            setWord8(e.currentTarget.textContent);
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected(e.currentTarget.textContent);
            e.currentTarget.id = 'selected';
          }
        } else if(word9 === '' && word1 !== e.currentTarget.textContent && word2 !== e.currentTarget.textContent && word3 !== e.currentTarget.textContent && word4 !== e.currentTarget.textContent && word5 !== e.currentTarget.textContent && word6 !== e.currentTarget.textContent && word7 !== e.currentTarget.textContent && word8 !== e.currentTarget.textContent && word10 !== e.currentTarget.textContent && word11 !== e.currentTarget.textContent && word12 !== e.currentTarget.textContent || word9 === e.currentTarget.textContent) {
          if(e.currentTarget.textContent === word9) {
            setWord9('');
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected('');
            e.currentTarget.id = '8';
          } else {
            setWord9(e.currentTarget.textContent);
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected(e.currentTarget.textContent);
            e.currentTarget.id = 'selected';
          }
        } else if(word10 === '' && word1 !== e.currentTarget.textContent && word2 !== e.currentTarget.textContent && word3 !== e.currentTarget.textContent && word4 !== e.currentTarget.textContent && word5 !== e.currentTarget.textContent && word6 !== e.currentTarget.textContent && word7 !== e.currentTarget.textContent && word8 !== e.currentTarget.textContent && word9 !== e.currentTarget.textContent && word11 !== e.currentTarget.textContent && word12 !== e.currentTarget.textContent || word10 === e.currentTarget.textContent) {
          if(e.currentTarget.textContent === word10) {
            setWord10('');
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected('');
            e.currentTarget.id = '9';
          } else {
            setWord10(e.currentTarget.textContent);
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected(e.currentTarget.textContent);
            e.currentTarget.id = 'selected';
          }
        } else if(word11 === '' && word1 !== e.currentTarget.textContent && word2 !== e.currentTarget.textContent && word3 !== e.currentTarget.textContent && word4 !== e.currentTarget.textContent && word5 !== e.currentTarget.textContent && word6 !== e.currentTarget.textContent && word7 !== e.currentTarget.textContent && word8 !== e.currentTarget.textContent && word9 !== e.currentTarget.textContent && word10 !== e.currentTarget.textContent && word12 !== e.currentTarget.textContent || word11 === e.currentTarget.textContent) {
          if(e.currentTarget.textContent === word11 ) {
            setWord11('');
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected('');
            e.currentTarget.id = '10';
          } else {
            setWord11(e.currentTarget.textContent);
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected(e.currentTarget.textContent);
            e.currentTarget.id = 'selected';
          }
        } else if(word12 === '' && word1 !== e.currentTarget.textContent && word2 !== e.currentTarget.textContent && word3 !== e.currentTarget.textContent && word4 !== e.currentTarget.textContent && word5 !== e.currentTarget.textContent && word6 !== e.currentTarget.textContent && word7 !== e.currentTarget.textContent && word8 !== e.currentTarget.textContent && word9 !== e.currentTarget.textContent && word10 !== e.currentTarget.textContent && word11 !== e.currentTarget.textContent || word12 === e.currentTarget.textContent ) {
          if(e.currentTarget.textContent === word12) {
            setWord12('');
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected('');
            e.currentTarget.id = '11';
          } else {
            setWord12(e.currentTarget.textContent);
            console.log(e.currentTarget.textContent);
            setIsThisWordSelected(e.currentTarget.textContent);
            e.currentTarget.id = 'selected';
          }
        } else {
            console.log("No selected word and input field matched");
        }
      } 
    }
    
    useEffect(() => {
      if(isThisWordSelected || !isThisWordSelected) {
        setVerifyPhrase([
          word1,
          word2,
          word3,
          word4,
          word5,
          word6,
          word7,
          word8,
          word9,
          word10,
          word11,
          word12 
        ])

        const matchVerifyPhrase = verifyPhrase?.toString().split(',').join(' ').trim() === mnemonicPhrase?.toString().split(',').join(' ').trim();
        console.log(verifyPhrase?.toString().split(',').join(' ').trim());
        console.log(mnemonicPhrase?.toString().split(',').join(' ').trim());
        
        matchVerifyPhrase ? setDisabled(false) : setDisabled(true);
        
      }
     
    },[ 
      word1,
      word2,
      word3,
      word4,
      word5,
      word6,
      word7,
      word8,
      word9,
      word10,
      word11,
      word12, 
      verifyPhrase])

    const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/access/account/success");
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
                      mnemonicPhrase={[...verifyPhrase?.toString().split(',')]}
                      readOnly
                    />
                    <MnemonicGuess
                    mnemonicPhrase={arrayRandom}
                    isThisWordSelected={isThisWordSelected}
                    handleWordClick={handleWordClick}
                    />
                    <div className="box_btns">
                        <Button 
                        disabled={disabled}
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
