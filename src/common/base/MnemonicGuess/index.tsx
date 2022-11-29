import './MnemonicGuess.css'


type MnemonicProps = {
  handleClick?: () => void
  disabled?: boolean
  mnemonicPhrase?: Array<string>
  verifyPhrase?: Array<any>
  setVerifyPhrase?: any
  readOnly?: boolean
  wordCount?: number
  // title: String
  // desc: String
  // route?: string
}


const Index = (props: MnemonicProps) => {
  

  console.table(props?.mnemonicPhrase)
  return (
    <div className='wrap-mnemonic__guess'>
      {props?.mnemonicPhrase?.map((word, index) => (
          <div
            className='mnemonic__guess-content'
            key={index}
          >
            <button
              className='btn-guess__content'
              onClick={props.handleClick}
              disabled={props.readOnly}
            >{word}</button>
        </div>
      ))}
    </div>
  )
}

export default Index


