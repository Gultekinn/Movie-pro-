import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Content.scss"
const Content = () => {
  return (
   <div className="content-container">
    <Outlet/>
   
   </div>
  )
}

export default Content
