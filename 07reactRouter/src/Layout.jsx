import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
// Outlet mtlb - jahan use karo wahan ki chizwein change kar sakte , baaki sab chiz same rahega 


function Layout(){
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    
    </>
  )
}

export default Layout ;