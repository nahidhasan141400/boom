import React from 'react';
import style from '../styles/footer.module.css';
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.border}></div>
      <div className={style.conteiner}>
        <div className={style.upside}>
          <motion.h1 
            initial={{
              transform: "skew(-30deg, 0deg)"
            }}
            whileInView={
              {transform: "skew(30deg, 0deg)"}
            }
            transition={{
              duration : 5,
              type:"spring"
            }}
          className={style.back}>boom</motion.h1>
          <h1 className={style.front}>We Belive in good helth</h1>
        </div>
        <div className={style.downside}>&copy; Copyright 2022 boom
</div>
      </div>
    </div>
  )
}

export default Footer