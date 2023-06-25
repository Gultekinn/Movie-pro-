import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import './Adminbar.scss'
const Adminbar = () => {
    const [doctor, setDoctor] = useState(false);
    return (
        <div className="body">

        
        <div className="admin-navbar">
            <div className="nav">
                <div className="logo">
                    <Link to={"/admin"}>
                        <img src="https://webstrot.com/html/moviepro/html/images/header/logo.png" alt="logo" />
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
                                    <NavLink to={"/contacts"}>
                                        <i className="fa-solid fa-caret-right"></i> Contact
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

export default Adminbar;