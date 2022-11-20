import CryptocurrencyImg from '../../assets/images/cryptocurrency.png';
import Button from '../../common/base/Button';

import { useNavigate } from 'react-router-dom';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import './Home.css';
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
  
  const navigate = useNavigate();

  function handleClick() {
    navigate("/create");
  }


  return (
    <div className='homepage'>
        <div className='homepage_box'>
            <div className='box_content'>
              <img className='content_image' src={CryptocurrencyImg} alt="Crypto Hedera Wallet" title="Crypto Hedera Wallet" />
              <h1 className='content_heading-1'>Welcome to Mazaryn</h1>
              <p className='content_sub-heading-1'>The Safest Hedera wallet you’ll need to buy and store your crypto assets</p>
              <div className='box_btns'>
                <Button
                 handleClick={handleClick}
                >
                  {t("Welcome.create.button")}
                </Button>
                <Button
                 secondary
                 handleClick={handleClick}
                >
                  {t("Welcome.restore.button")}
                </Button>
              </div>
            </div>
        </div>
        {/* <I18Next/> */}
    </div>
  )
}

export default Index