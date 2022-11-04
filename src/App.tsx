import { Routes, Route, Link, Navigate} from "react-router-dom";
import './App.css';
import Create from "./pages/create";
import Home from "./pages/home";
import Software from "./pages/create/Software";
import Hardware from "./pages/access/Hardware";
import Ledger from "./pages/access/Ledger/Ledger";
import Account from "./pages/access/Account/Account";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
           HederaWallet
        </Link>
        <Link to="/about">
            About
        </Link>
        <Link to="/faqs">
            FAQs
        </Link>
        <Link to="/access">
          Access
        </Link>
        <Link to="/create">
          Create Wallet
        </Link>
      </header>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/create" element={<Create />} />
         <Route path="/create/software" element={<Software />} />
         <Route path="/access/hardware" element={<Hardware />} />
         <Route path="/access/hardware/ledger" element={<Ledger/>} />
         <Route path="/access/account" element={<Account />} />
         <Route
          path="/create/hardware"
          element={<Navigate to="/access/hardware" replace />}
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
    </div>
  );
}

export default App;
