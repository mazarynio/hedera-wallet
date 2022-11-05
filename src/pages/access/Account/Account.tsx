import type { AccountId, PublicKey } from "@hashgraph/sdk";
import AccountIdInput from "../../../common/base/AccountIdInput";
// import { LedgerHardwareWallet } from "../../../domain/wallet/hardware-ledger";
import { Wallet } from "../../../domain/wallet/abstract";
import BtnBack from "../../create/components/BtnBack";

import "./Account.css"

const Account = () => {
  return (
    <div className="account">
      <div>
        <BtnBack />
      </div>
      <h1 className='heading-1'>Hedera Account Information</h1>
      <form>
        <div>
          <span>Enter Account ID</span>
        </div>

        <AccountIdInput />
      </form>
    </div>
  )
}

export default Account