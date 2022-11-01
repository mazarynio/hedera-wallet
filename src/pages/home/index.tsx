import './Home.css';
import I18Next from '../../i18n'

const index = () => {
  return (
    <div className='homepage'>
        <h1 className='heading-1'>
            You're in Hedera Wallet, Welcome to our Homepage!
        </h1>
        <I18Next/>
    </div>
  )
}

export default index