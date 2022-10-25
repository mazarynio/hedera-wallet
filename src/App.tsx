import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Create from "./pages/create";
import Home from "./pages/home";

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
         <Route path="/create" element={<Create  />} />
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
