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
          <div className="settings">
            <div onClick={() => setSettings(true)} className="setting">
              <i className="fa-solid fa-gear"></i>
            </div>
          </div>
          <div className="btn">
            <button onClick={() => navigate("/")}>
              <i className="fa-solid fa-right-to-bracket"></i>
              GO TO SITE
            </button>
          </div>
        </div>
        <div className="user-item">

        </div>
      </div>
      {settings && (
        <div id="settings">
          <div
            onClick={() => setSettings(false)}
            className="background-setting"
          ></div>
          <div className="settings">
            <div className="head">
              <div className="logo">
                
              </div>
              <div
                onClick={() => setSettings(false)}
                className="close-settings"
              >
                x
              </div>
            </div>
            <div className="img">
              <img onClick={() => navigate("/")} src="" alt="" />
            </div>
            <h4>HOME PAGE</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
