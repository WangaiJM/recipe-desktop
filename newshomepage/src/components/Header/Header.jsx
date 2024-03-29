import "./header.scss";
import Logo from "./../../assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive(!active);
  };
  return (
    <header>
      <div className="container">
        <a href="/">
          <img src={Logo} alt="Main logo" />
        </a>
        <nav className={`main-nav ${active ? "active" : ""}`}>
          <div className="nav-items">
            <a href="" className="nav__link">
              Home
            </a>
            <a href="" className="nav__link">
              New
            </a>
            <a href="" className="nav__link">
              Popular
            </a>
            <a href="" className="nav__link">
              Trending
            </a>
            <a href="" className="nav__link">
              Categories
            </a>
          </div>
        </nav>
        <div className="hambuger">
          <FaBars
            className={`hambuger-btn ${active ? "active" : ""}`}
            onClick={handleMenu}
          />
          <IoClose
            className={`hambuger-btn ${active ? "" : "active"}`}
            onClick={handleMenu}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
