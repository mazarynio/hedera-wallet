import { Link } from "react-router-dom"
import Logo from "../../../assets/svg/logo-mazaryn.svg";


const Index = () => {
  return (
    <header className="App-header">
        <Link to="/">
           <img src={Logo} alt="Mazaryn Logo" title="Mazaryn Logo" />
        </Link>
  </header>
  )
}

export default Index