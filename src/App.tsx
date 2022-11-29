import Header from "./common/components/Header/Index"

import { Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import Create from "./pages/create";
import Home from "./pages/home";
import Software from "./pages/create/Software";
import Mnemonic from "./pages/create/Mnemonic";
import Hardware from "./pages/access/Hardware";
import Ledger from "./pages/access/Ledger/Ledger";
import Account from "./pages/access/Account/Account";
import MnemonicVerify from "./pages/create/MnemonicVerify";
import Password from "./pages/create/Password";
import ConfirmRecovery from "./pages/access/Account/ConfirmRecovery/ConfirmRecovery";
import RecoveryPhrase from "./pages/access/Account/RecoveryPhrase/RecoveryPhrase";

function App() {

  return (
    <main className="App">
      <Header />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/create" element={<Create />} />
         <Route path="/create/password" element={<Password />} />
         <Route path="/create/software" element={<Software />} />
         <Route path="/create/mnemonic" element={<Mnemonic />} />
         <Route path="/create/mnemonic/verify" element={<MnemonicVerify />} />
         <Route path="/access/hardware" element={<Hardware />} />
         <Route path="/access/hardware/ledger" element={<Ledger/>} />
         <Route path="/access/account" element={<Account />} />
         <Route path="/access/account/recovery-phrase" element={<RecoveryPhrase/>} />
         <Route path="/access/account/confirm-recovery" element={<ConfirmRecovery/>} />
         <Route
          path="/create/hardware"
          element={<Navigate to="/access/hardware" replace />}
          />
         <Route
          path="/create/software/mnemonic"
          element={<Navigate to="/create/mnemonic" replace />}
          />
      </Routes>
      {/* <footer>
      <Link to="/privacy">
            Privacy
        </Link>
        <Link to="/terms">
           Terms
        </Link>
        <Link to="https://github.com/mazarynio/hedera-wallet">
            Hedera Wallet
        </Link>
        <div>
          <span>©2022 HederaWallet, All Rights reserved.</span>
        </div>
        <Link to="/create">
          Create Wallet
        </Link>
      </footer> */}
    </main>
  );
}

export default App;
