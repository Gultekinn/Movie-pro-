import React, { useEffect } from 'react'
import { Outlet, useNavigate  } from "react-router-dom";
import SideBar from '../../../component/Admin/SideBar/SideBar';
// import axios from 'axios'
// import {useCookies} from 'react-cookie'

function AdminRoot() {
  // const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const verifyUser = async () => {
  //     if (!cookies.jwt) {
  //       navigate("/login");
  //     } else {
  //       const { data } = await axios.post(
  //         "http://localhost:8080/auth/login",
  //         {},
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //     }
  //   };

  //   verifyUser();
  // }, [cookies, removeCookie, navigate]);
  return (
    <>
    <SideBar />
    </>
  )
}

export default AdminRoot