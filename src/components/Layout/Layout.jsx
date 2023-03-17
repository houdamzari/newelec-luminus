import React from 'react';
import {NavBar} from "../../components";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;