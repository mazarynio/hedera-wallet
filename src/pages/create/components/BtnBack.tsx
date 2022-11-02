import { BsArrowLeft } from 'react-icons/bs'
import './BtnBack.css'

const BtnBack = () => {
  return (
    <button
      className='btn-back' 
      onClick={() => window.history.back()}>
      <BsArrowLeft
        className='arrow-left' 
        />
      <span>Back</span>
    </button>
  )
}

export default BtnBack