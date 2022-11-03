import BtnBack from "../../create/components/BtnBack"
import LedgerInfo from "../components/LedgerInfo"
import Button from "../../../common/Button"


const Ledger = () => {
  return (
    <div className='hardware'>
      <div>
        <BtnBack />
      </div>
      <h1 className='heading-1'>Ledger</h1>
      <div>
         <LedgerInfo />
         <Button />
      </div>
    </div>
  )
}

export default Ledger