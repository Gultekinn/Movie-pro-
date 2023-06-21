import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import './Adminbar.scss'
const Header = () => {
    const [doctor, setDoctor] = useState(false);
    return (
        <div className="body">

        
        <div className="admin-navbar">
            <div className="nav">
                <div className="logo">
                    <Link to={"/admin"}>
                        <img src="https://github.com/EbulfezSadigov/Admin-Panel/blob/master/frontend/src/assets/logo-dark.png?raw=true" alt="logo" />
                    </Link>
                </div>
            </div>
            <nav>
                <ul>
                    <li className="nav-menu">
                        <Link onClick={() => setDoctor(!doctor)}>
                            <div className="icon">
                                <AiFillDashboard />
                            </div>
                            Cinemas
                        </Link>
                        {doctor && (
                            <ul>
                                <li className="menu-item">
                                    <NavLink to={"/cinema"}>
                                        <i className="fa-solid fa-caret-right"></i> Add Cinema
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to={"/film"}>
                                        <i className="fa-solid fa-caret-right"></i> Add Film
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>

                </ul>
            </nav>
        </div>
        </div>
    );
};

export default Header;