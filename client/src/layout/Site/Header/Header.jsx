import React from "react";
import { Link } from "react-router-dom";
import "../../../layout/Site/Header/Header.scss";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
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
           
            <li>
              <Link id="link" to="vip">
                VIP
              </Link>
            </li>
            <li>
              <Link id="link" to="campaign">
                Campaign
              </Link>
            </li>
            <li>
              <Link id="link" to="contact">
                Contact
              </Link>
            </li>
            <li>
              <Link id="link" to="about">
                About us<ArrowDropDownIcon/>
              </Link>
              <ul>
              <li><Link to="condition" id="links">rules and conditions</Link></li>
              <li><Link to="rule"  id="links">advertising offers</Link></li>
              </ul>

            </li>
          </ul>


          <div>

            <button id="icon">
              <a href="https://apps.apple.com/us/app/park-cinema/id1119977600?ls=1"> <AppleIcon /></a> 
            
            </button>
          </div>
          <div>
            <button id="icon">
             <a href="https://play.google.com/store/apps/details?id=az.parkcinema.app&hl=ru"> <AndroidIcon /></a>
            </button>
          </div>
          <div>
           <Link to='login'><button id="sign">Login</button></Link> 
          </div>

          <div>
           <Link to="regist"><button id="sign">Sign up</button></Link> 
          </div>
         
          
        </div>



<div className="navbar__menu">
  <button   className="icn"><MenuIcon/></button>

</div>





      </div>


     
    </>
  );
};

export default Header;
