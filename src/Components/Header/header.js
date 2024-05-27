import { Link } from "react-router-dom";
import "./header.css"
const Header=()=>{
    return(
    <>
    <div className="header">
    <nav>
    <div className="logo">BookVerse</div>
    <div className="other_than_logo">
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/form">Sell/Donate</Link></li>
      <li><Link to="/buy">Buy/Exchange</Link></li>
      <li><Link to="/buy">E-Books</Link></li>
      <li><Link to="/buy">Audio-Books</Link></li>
    </ul>
    </div>
  </nav>
  </div>
    </>)

    
}
export default Header;