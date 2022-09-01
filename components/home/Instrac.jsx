import React from 'react';
import Image from "next/image"
import style from "../../styles/instar.module.css";
import {FaHamburger , FaShoppingBag , FaShieldVirus} from 'react-icons/fa';
import { motion } from 'framer-motion';
import burger from "../../public/img/burgar.png"
import lassi from "../../public/img/lassi.png"
import chick from "../../public/img/chick.png"
import samusa from "../../public/img/samusa-bg.png"
import roll from "../../public/img/rolll.png"

const Instrac = () => {
  const transiriion = {
                        duration : 0.3,
                        type:"spring"
                      }
  return (
    <div className={style.main}>
        <div className={style.borderup}></div>
        <div className={style.borderdown}></div>
        <div className={style.conteiner}>
            <motion.div 
              initial={{
                transform: "scale(10%)"
              }}
              whileInView={
                {transform: "scale(100%)"}
              }
              transition={transiriion}
            className={style.card}>
              <div className={style.logo}><Image src={burger} alt="" layout='fill' /></div>
              <h1>What's Hot</h1>
            </motion.div>
            {/* card end */}
            <motion.div 
              initial={{
                transform: "scale(10%)"
              }}
              whileInView={
                {transform: "scale(100%)"}
              }
              transition={transiriion}
            className={style.card}>
              <div className={style.logo}><Image src={lassi} alt="" layout='fill' /></div>
              <h1>desssert</h1>
            </motion.div>
            {/* card end */}
            <motion.div 
              initial={{
                transform: "scale(10%)"
              }}
              whileInView={
                {transform: "scale(100%)"}
              }
              transition={transiriion}
            className={style.card}>
              <div className={style.logo}><Image src={chick} alt="" layout='fill' /></div>
              <h1>chickens</h1>
            </motion.div>
            {/* card end */}
            <motion.div 
              initial={{
                transform: "scale(10%)"
              }}
              whileInView={
                {transform: "scale(100%)"}
              }
              transition={transiriion}
            className={style.card}>
              <div className={style.logo}><Image src={samusa} alt="" layout='fill' /></div>
              <h1>strret food</h1>
            </motion.div>
            {/* card end */}
            <motion.div 
              initial={{
                transform: "scale(10%)"
              }}
              whileInView={
                {transform: "scale(100%)"}
              }
              transition={transiriion}
            className={style.card}>
              <div className={style.logo}><Image src={roll} alt="" layout='fill' /></div>
              <h1>breakfast</h1>
            </motion.div>
            {/* card end */}
        </div>
    </div>
  )
}

export default Instrac