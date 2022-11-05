import React from 'react'
import BtnBack from '../components/BtnBack';
import MnemonicInput from '../../../common/base/MnemonicInput';
import './Mnemonic.css'

const index = () => {
  return (
    <div className='mnemonic'>
       <div>
        <BtnBack />
      </div>
      <h1 className='heading-1'>Mnemonic Phrase</h1>
      <div>
        <form>
          <MnemonicInput

          />
        </form>
      </div>
    </div>
  )
}

export default index