import React from 'react';
import Image from "next/image"
import style from "../styles/login.module.css";
import boomlogo from "../public/img/logo.png";
import Link from "next/link";

const login = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.blockSq}></div>
        <div className={style.blockCr}></div>
        <div className={style.imgLogo}>
            <Image src={boomlogo} layout="fill" objectFit='contain' alt='boom'/>
        </div>
        <h1 className={style.titel}>login</h1>
        <form action="#" method="post">
          <input type="text" placeholder='username'/>
          <input type="password" placeholder='password'/>
          <button>login</button>
        </form>
        <a href="#">forget password</a>
        <Link href="registration"><a >create a account</a></Link>

      </div>
    </div>
  )
}

export default login