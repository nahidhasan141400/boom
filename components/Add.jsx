import React from 'react';
import style from "../styles/add.module.css";
import Image from "next/image";
import img from "../public/img/barger.png"

const Add = () => {
  return (
    <div className={style.main}>
        <div className={style.conteinar}>
            <div className={style.img}>
                <Image src={img} alt="" layout='fill' objectFit='cover'/>
            </div>
            <div className={style.text}>
                <h1>HOT Deal 20% off</h1>
                <button>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Add