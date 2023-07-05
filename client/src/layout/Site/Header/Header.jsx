import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../layout/Site/Header/Header.scss";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <div className="navbar__logo">
            <img
              src="https://webstrot.com/html/moviepro/html/images/header/logo.png"
              alt=""
            />
          </div>
        </div>
        <div className="navbar__right">
          <ul className="list">
            <li><Link id="link" to="">Home</Link></li>
            <li><Link id="link" to="vip">VIP</Link></li>
            <li><Link id="link" to="campaign">Campaign</Link></li>
            <li><Link id="link" to="contact">Contact</Link></li>
            <li>
              <Link id="link" to="about">
                About us<ArrowDropDownIcon/>
              </Link>
              <ul>
                <li><Link to="condition" id="links">rules and conditions</Link></li>
                <li><Link to="rule" id="links">advertising offers</Link></li>
              </ul>
            </li>
            <div>
              <Link id="linkss" to='login'> <AccountCircleIcon/></Link> 
            </div>
          </ul>
        </div>
        <div className="navbar__menu">
          <button className="icn" onClick={toggleMenu}>
            <MenuIcon/>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sidebar">
          <ul className="sidebar__list">
            <li><Link id="link" to="">Home</Link></li>
            <li><Link id="link" to="vip">VIP</Link></li>
            <li><Link id="link" to="campaign">Campaign</Link></li>
            <li><Link id="link" to="contact">Contact</Link></li>
            <li>
              <Link id="link" to="about">
                About us<ArrowDropDownIcon/>
              </Link>
              <ul>
                <li><Link to="condition" id="links">rules and conditions</Link></li>
                <li><Link to="rule" id="links">advertising offers</Link></li>
              </ul>
            </li>
            <div>
              <Link id="linkss" to='login'> <AccountCircleIcon/></Link> 
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;


