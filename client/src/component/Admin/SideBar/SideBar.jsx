import React, { useState } from 'react'
import '../SideBar/SideBar.scss';
import { RxHamburgerMenu } from 'react-icons/rx'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { AiFillDashboard } from 'react-icons/ai'
import { BsCardChecklist } from 'react-icons/bs'
import { TbActivityHeartbeat } from 'react-icons/tb'
import { FaMicroblog} from 'react-icons/fa'
import { RiAdminFill } from 'react-icons/ri'

const SideBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
  return (
    <div className={`main ${isSidebarOpen ? '' : 'close'}`} id="main">
      <div className="sidebar">
        <div className="sidebar__top">
          <div>
            {isSidebarOpen ? (
              <GrClose
                className="toggle-btn"
                id="menu"
                onClick={toggleSidebar}
              />
            ) : (
              <div className="adminimg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8a9YSaMNgslH8Rx0SlZ1YZveaTZKQT5qzFay2CmaeFQ&s" alt="img" className='admin-logo-img' />
              </div>
            )}
          </div>
          <div className="logo-div">
            <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/04/logo-1-1-2-2.png" alt="logo" className='admin-logo' />
          </div>
        </div>

        <div className="container">
          <div className={`admin-items ${isSidebarOpen ? '' : 'icon-only'}`}>
            <ul>
              <li>
                <AiFillDashboard />
                {isSidebarOpen && <Link to="">Dashboard</Link>}
              </li>
              <li>
                <BsCardChecklist />
                {isSidebarOpen && <Link to="moviedata">Movie</Link>}
              </li>
              <li>
                <TbActivityHeartbeat />
                {isSidebarOpen && <Link to="activitydata">Activity</Link>}
              </li>
              <li>
                <FaMicroblog />
                {isSidebarOpen && <Link to="contactdata">Contact</Link>}
              </li>
             
              <li className='adminpage'>
              <RiAdminFill/>
              {isSidebarOpen && <Link to="userdata">Admin</Link>}
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
        </header>
      </div>
    </div>
  )
}

export default SideBar
