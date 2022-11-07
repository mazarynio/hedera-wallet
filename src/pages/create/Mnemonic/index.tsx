import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import{ Mnemonic } from "@hashgraph/sdk";
import { MnemonicSoftwareWallet } from "../../../domain/wallet/software-mnemonic";

import BtnBack from '../components/BtnBack';
import MnemonicInput from '../../../common/base/MnemonicInput';

import './Mnemonic.css'
import { Wallet } from '../../../domain/wallet/abstract';
import Button from '../../../common/base/Button';


const Index = () => {

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
      <h1 className='heading-1'>Mnemonic Phrase</h1>
      <div>
        <form>
          <MnemonicInput
           mnemonicPhrase={[...mnemonicPhrase?.toString().split(' ')]}
           readOnly
          />
          <Button 
          handleClick={handleClick}
          />
        </form>
      </div>
    </div>
  )
}

export default Index
