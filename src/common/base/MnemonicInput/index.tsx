import './MnemonicInput.css'


type MnemonicProps = {
  disabled?: boolean
  mnemonicPhrase?: Array<string>
  readOnly: boolean
  // title: String
  // desc: String
  // route?: string
}


const Index = (props: MnemonicProps) => {
  console.table(props?.mnemonicPhrase)
  return (
    <div className='wrap-mnemonic__input'>
      {props?.mnemonicPhrase?.map((word, index) => (
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
      ))} 
    </div>
  )
}

export default Index
