import React from 'react';
import { useState } from 'react';
import style from "../../styles/account/layout.module.css";
import Nav from "./nav";
import Details from "./setting/details";
import Setting from "./setting/setting";

const Layout = () => {
  let [nav ,setNav] = useState("details")
  return (
      <div className={style.main}>
        <div className={style.nav}>
          <Nav nav={nav} setNav={setNav}/>
        </div>
        <div className={style.con}>

          {nav==="details"? <Details /> : null }
          {nav==="setting"? <Setting /> : null }
          
        </div>
      </div>
    )
}

export default Layout;