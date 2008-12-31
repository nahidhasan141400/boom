import React from 'react';
import style from "../styles/account/account.module.css";
import Header from "../components/account/header";
import Layout from "../components/account/layout";

const account = () => {
  return (
    <div className={style.account}>
      <div className={style.con}>
        <div className={style.header}>
          <Header/>
        </div>
        
        <div className={style.body}>
          <Layout/>
        </div>
      </div>
    </div>
  )
}

export default account;