import React from 'react'
import './MnemonicGuess.css'


type MnemonicProps = {
  handleWordClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  mnemonicPhrase?: Array<string>
  verifyPhrase?: Array<any>
  setVerifyPhrase?: any
  wordCount?: number
  isThisWordSelected?: string
  // isSelected?: boolean
  // title: String
  // desc: String
  // route?: string
}


const Index = React.memo((props: MnemonicProps) => {

  // TODO: Toggle color of button content blue/gray
  

  console.table(props?.mnemonicPhrase);
  return (
    <div className='wrap-mnemonic__guess'>
      {props?.mnemonicPhrase?.map((word, index) => (
          <div
            className='mnemonic__guess-content'
            key={index}
          >
            <button
              id={index.toString()}
              className={(props.isThisWordSelected === word) ? 'btn-guess__content --selected' : 'btn-guess__content'}
              onClick={props.handleWordClick}
              type="button"
            >{word}</button>
        </div>
      ))}
    </div>
  )
})

export default Index



