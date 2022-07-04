import React from 'react';
import style from "../../styles/cart/empty.module.css";
import cartImg from "../../public/img/undraw_add_to_cart_re_wrdo.svg";
import Image from "next/image";
import Link from "next/link";

const Empty = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
          <div className={style.img}>
            <div className={style.imgconteiner}>
              <Image src={cartImg} alt="" objectFit='contain' layout='fill'/>
            </div>
          </div>
          <div className={style.text}>
            <h1>Cart is empty</h1>
            <Link href="/menu"><a >Go to menu</a></Link>
          </div>
      </div>
    </div>
  )
}

export default Empty;