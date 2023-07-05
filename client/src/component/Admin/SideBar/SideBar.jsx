import React, { useState } from 'react'
import '../SideBar/SideBar.scss';
import { RxHamburgerMenu } from 'react-icons/rx'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

import { AiFillDashboard } from 'react-icons/ai'
import { BiSolidMoviePlay } from 'react-icons/bi'
import { TbActivityHeartbeat } from 'react-icons/tb'
import { FaMicroblog} from 'react-icons/fa'
import { RiAdminFill } from 'react-icons/ri'
import Content from '../../../layout/Admin/Content/Content';
import { useCookies } from 'react-cookie';
import { LuLogOut } from 'react-icons/lu'
const SideBar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const handleLogout = () => {
    console.log(cookies);
    removeCookie("jwt")
    navigate('/login')

  }
  const navigate = useNavigate()

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };

  return (
    <div className={`main ${isSidebarOpen ? '' : 'close'}`} id="main">
      <div className="sidebarr">
        <div className="sidebarr__top">
          <div className='tgl'>
            {isSidebarOpen ? (
              <GrClose
                className="toggle-btn"
                id="menu"
                onClick={toggleSidebar}
              />
            ) : (
              <div className="adminimg">
                <img id='imggg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0kWRydMXI3JWHMeswFXb1UBzyUOGd7j9lw&usqp=CAU" alt="img" className='admin-logo-img' />
              </div>
            )}
          </div>
          <div className="logo-div">
            <img src="https://webstrot.com/html/moviepro/html/images/header/logo.png" alt="logo" className='admin-logo' />
          </div>
        </div>

        <div className="container">
          <div className={`admin-items ${isSidebarOpen ? '' : 'icon-only'}`}>
            <ul>
              <li>
                <AiFillDashboard/>
                {isSidebarOpen && <Link to="">Dashboard</Link>}
              </li>
              <li>
                <BiSolidMoviePlay/>
                {isSidebarOpen && <Link to="moviedata">Movie</Link>}
              </li>
              <li>
                <TbActivityHeartbeat/>
                {isSidebarOpen && <Link to="activitydata">Activity</Link>}
              </li>
              <li>
                <FaMicroblog/>
                {isSidebarOpen && <Link to="contactdata">Contact</Link>}
              </li>
              <li className='userpage'>
                <FaUser />
                {isSidebarOpen && <Link to="userdata">Users</Link>}
              </li>
              <li className='adminpage'>
              <RiAdminFill/>
              {isSidebarOpen && <Link to="admindata">Admin</Link>}
              </li>
              <li className='adminpage' onClick={handleLogout}>
                <LuLogOut />
                {isSidebarOpen && <Link to="admindata">Logout</Link>}
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="content">
        <header>
          {!isSidebarOpen && (
            <RxHamburgerMenu id="hamburger"
              className="toggle-btn"
              onClick={toggleSidebar}
            />
          )}
            <div className="admin-img">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="admin__img" />
          </div>
        </header> 
        <Content />
      </div>
    </div>
  )
}

export default SideBar
