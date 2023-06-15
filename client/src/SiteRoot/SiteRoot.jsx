import React from 'react'
import Header from '../layout/Site/Header/Header'
import Footer from '../layout/Site/Footer/Footer'
import {Outlet} from 'react-router-dom'
const SiteRoot = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default SiteRoot
