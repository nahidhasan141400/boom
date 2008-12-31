import React from 'react';
import style from '../styles/404.module.css';
import Image from 'next/image';

const NotPage = () => {
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.image}>
                <Image alt="" src="/svg/404.svg" layout='fill' objectFit='contain'></Image>
            </div>
            <div className={style.text}>
                this is wrong page
            </div>
        </div>
    </div>
  )
}

export default NotPage