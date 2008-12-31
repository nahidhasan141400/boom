import React from 'react';
import style from "../../styles/account/header.module.css";
import Image from "next/image";
import samusa from "../../public/img/samusa-bg.png";
import {FaCamera} from "react-icons/fa";
import profile from "../../public/nahid.jpg"

const header = () => {
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.bgImg}>
                <Image alt='' layout='fill' src={samusa} objectFit="contain"/>
            </div>
            <div className={style.profile}>
                <div className={style.avatar}>
                    <div className={style.photo}>
                    <Image alt='' layout='fill' src={profile} objectFit="contain"/>
                    </div>
                    <div className={style.change}>
                        <span><FaCamera/></span>
                        <h2>change</h2>
                    </div>
                </div>
                <div className={style.name}>
                    <h1>nahid hasan sagar</h1>
                    <p>nahidhasan@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default header