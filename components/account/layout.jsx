import React from 'react';
import { useState } from 'react';
import style from "../../styles/account/layout.module.css";
import Nav from "./nav";
import Details from "./setting/details";
import Setting from "./setting/setting";

const Layout = ({setUser,user}) => {
  let [nav ,setNav] = useState("details")
  return (
      <div className={style.main}>
        <div className={style.nav}>
          <Nav nav={nav} setNav={setNav}/>
        </div>
        <div className={style.con}>

          {nav==="details"? <Details user={user} /> : null }
          {nav==="setting"? <Setting setUser={setUser} /> : null }
          
        </div>
      </div>
    )
}

export default Layout;