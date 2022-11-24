import { MdKeyboardArrowLeft} from "react-icons/md";
import './BtnBack.css'

const BtnBack = () => {
  return (
    <button
      className='btn-back' 
      onClick={() => window.history.back()}>
      <MdKeyboardArrowLeft
        className='arrow-left' 
        />
    </button>
  )
}

export default BtnBack 