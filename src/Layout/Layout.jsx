import React from 'react'
import Register from '../Page/Register'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
    <Register/>
    <Outlet/>
    </>
  )
}

export default Layout