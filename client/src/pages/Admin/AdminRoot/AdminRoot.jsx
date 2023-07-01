import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate  } from "react-router-dom";
import SideBar from '../../../component/Admin/SideBar/SideBar';
import axios from 'axios'
import {useCookies} from 'react-cookie'

function AdminRoot() {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();
  const [isAdmin, setisAdmin] = useState([])

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.get(
          "http://localhost:8080/auth/getMe",
          {
            withCredentials: true,
          }
        );
        setisAdmin(data);
      }
    };

    verifyUser();
  }, [cookies, removeCookie, navigate]);
  return (
    <>
    {
      isAdmin.isAdmin?(<SideBar />):(<button onClick={()=>navigate("/")}>Go Home</button>)
    }
    </>
  )
}

export default AdminRoot