import React from 'react'
import Header from '../layout/Admin/Header/Header'
import { Outlet } from 'react-router-dom'

const AdminRoot = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default AdminRoot
