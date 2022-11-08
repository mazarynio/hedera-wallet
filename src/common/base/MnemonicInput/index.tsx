import './MnemonicInput.css'


type MnemonicProps = {
  disabled?: boolean
  mnemonicPhrase?: Array<string>
  verifyPhrase?: Array<any>
  readOnly?: boolean
  wordCount?: number
  // title: String
  // desc: String
  // route?: string
}


const Index = (props: MnemonicProps) => {


  console.table(props?.mnemonicPhrase)
  return (
    <div className='wrap-mnemonic__input'>
      {props.mnemonicPhrase ? props?.mnemonicPhrase?.map((word, index) => (
          <div
            className='mnemonic__input-content'
            key={index}
          >
            <label>
              {`${index + 1}`?.toString().padStart(2,  "\u{00A0}" )}.
            </label>
            <input 
              value={word}
              placeholder={word}
              disabled={props.readOnly}
            />
        </div>
      )) : props?.verifyPhrase?.map((verifyWord, index) => (
        <div
            className='mnemonic__input-content'
            key={index}
          >
            <label>
              {`${index + 1}`?.toString().padStart(2,  "\u{00A0}" )}.
            </label>
            <input 
              value={verifyWord.word}
              placeholder={verifyWord.word}
              disabled={props.readOnly}
              
            />
        </div>
      ))} 
    </div>
  )
}

export default Index
