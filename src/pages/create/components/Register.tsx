import React, { useRef, useState, useEffect } from "react";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import './Register.css'
import Button from "../../../common/base/Button";

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

  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*_,{}-]).{8,64}$/;

const Register: React.FC = () => {

    const pwdRef = useRef<HTMLInputElement | null>(null);
    // const errRef = useRef<HTMLInputElement | null>(null);

    const [user, setUser] = useState('');

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
       pwdRef?.current?.focus();
    },[])

    useEffect(() => {
        console.log(user);
    },[user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
      !validPwd || !validMatch ? setDisabled(true) : setDisabled(false)
      console.log(disabled + " disabled state")  
    },[validPwd, validMatch])

    useEffect(() => {
        setErrMsg('');
    },[user, pwd, matchPwd])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // If button enabled with JS hack
      const v1 = PWD_REGEX.test(pwd);
      if(!v1) {
        setErrMsg("Invalid Entry");
        return;
      }
      console.log(user, pwd);
      setSuccess(true);
    }

    const { t } = useTranslation();

  return (
    <div className="register">
        {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
        <div className="register_content">
          <h1 className='content_heading-1'>{t("Password.formTitle")}</h1>
          <form onSubmit={handleSubmit} className="form-register">
            <input
                className="input-register"
                type="password"
                id="password"
                ref={pwdRef}
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                placeholder="Password"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
            />
            <p 
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "instructions --hide"} 
            >
                {t("Register.inputInstructions.password")}
            </p>
            <input
              className="input-register"
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              placeholder="Repeat Password"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
              <p 
              id="confirmnote"
              className={matchFocus && !validMatch ? "instructions" : "instructions --hide"} 
            >
                {t("Register.inputInstructions.confirmPassword")}
            </p>
            <Button
              handleClick={() => setErrMsg('')}
              disabled={disabled}
            >
              {t("Register.button.createWallet")}
            </Button>
            <p className="instructions agreement">By proceeding, you agree to the Terms of use and Privacy policy</p>
          </form>
        </div>
    </div>
  )
}

export default Register