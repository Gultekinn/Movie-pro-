import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";


const Header = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState(false);
  return (
    <div id="admin-header">
      <div className="header">
        <div className="header-body">
         
         
        </div>
        
      </div>
     
    </div>
  );
};

export default Header;
