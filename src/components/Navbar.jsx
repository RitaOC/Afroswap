import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../images/Logo.PNG";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();
  // const hideNavbar = () => {
  //   navRef.current.classList.remove("responsive_nav");
  // };
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div>
        <img id="logo" src={logo} alt="Logo" />
        <h2 className="name">AFROSWAP</h2>
      </div>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">About us</a>
        {/* <a href="/#">Contact</a> */}
        <Link to={"/contact"}>Contact</Link>
        <button className="wallet-connect">Connect Wallet</button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
