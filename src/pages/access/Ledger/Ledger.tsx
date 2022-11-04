import { useNavigate } from "react-router-dom";
import BtnBack from "../../create/components/BtnBack"
import LedgerInfo from "../components/LedgerInfo"
import {Button} from "../../../common/Button"

const Ledger = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/access/account");
  }

  return (
    <div className='hardware'>
      <div>
        <BtnBack />
      </div>
      <h1 className='heading-1'>Ledger</h1>
      <div>
         <LedgerInfo />
         <Button 
         handleClick={handleClick} 
         
         />
      </div>
    </div>
  )
}

export default Ledger