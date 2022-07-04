import React from 'react';
import style from "../styles/nav.module.css";
import Image from 'next/image';
import logo from "../public/img/logo.png";
import {motion} from "framer-motion";
import {FaCartPlus , FaHome , FaPaperclip , FaRegIdCard , FaRing , FaHamburger , FaUser } from "react-icons/fa"
import Link from "next/link";

const Nav = () => {
    const transiriion = {
                        duration : 0.3,
                        type:"spring"
                      }
    
    let [menu , setmenu] = React.useState({
        l:-100,
        r:-100
    })
    let leftmenu = React.useRef();
    let rightmenu = React.useRef();
    let setmenubtnh = (op)=>{
        if(op === "l"){
            menu.l=== -100?setmenu({l:0,r:-100}):setmenu({l:-100,r:-100})
        }else{
            menu.r=== -100?setmenu({l:-100,r:0}):setmenu({l:-100,r:-100})
        }
    }
  return (
    <nav className={style.main}>
       <div className={style.conteinar}>
        <div className={style.nav}>
            <div className={style.linksec}>
                <button className={style.menubtn} onClick={()=>{ setmenubtnh("l")} } ><FaHamburger/></button>
                <ol style={{ left: `${menu.l}%`}} className={style.ole} ref={leftmenu}>
                    <motion.li 
                        initial={{
                transform: "scale(10%)"
              }}
              whileInView={
                {transform: "scale(100%)"}
              }
              transition={transiriion}
                    ><Link href="/" ><a ><FaHome />home</a></Link></motion.li>
                    <motion.li 
                        initial={{
                transform: "scale(10%)"
              }}
              whileInView={
                {transform: "scale(100%)"}
              }
              transition={transiriion}
                    ><Link href="/menu"><a ><FaHamburger />menu</a></Link></motion.li>
                    <motion.li 
                        initial={{
                transform: "scale(10%)"
              }}
              whileInView={
                {transform: "scale(100%)"}
              }
              transition={transiriion}
                    ><Link href="/cart"><a ><FaCartPlus /> cart</a></Link></motion.li>
                </ol>
            </div>
            <div className={style.logo}>
                <div className={style.logocon}>
                    <Image src={logo} layout='fill' alt='boom' objectFit="contain"/>
                </div>
            </div>
            <div className={style.linksec}>
            <button onClick={()=>{ setmenubtnh("r")} } className={style.menubtn}><FaUser/></button>
                <ol style={{ left: `${menu.r}%`}}  className={style.ole} ref={rightmenu}>
                    <motion.li 
                        initial={{
                transform: "scale(10%)"
              }}
              whileInView={
                {transform: "scale(100%)"}
              }
              transition={transiriion}
                    ><a href="#"><FaPaperclip />order</a></motion.li>
                    <motion.li 
                        initial={{
                transform: "scale(10%)"
              }}
              whileInView={
                {transform: "scale(100%)"}
              }
              transition={transiriion}
                    ><a href="#"><FaRegIdCard />account</a></motion.li>
                    <motion.li 
                        initial={{
                transform: "scale(10%)"
              }}
              whileInView={
                {transform: "scale(100%)"}
              }
              transition={transiriion}
                    ><a href="#"><FaRing/>logout</a></motion.li>
                </ol>
            </div>
        </div>
       </div>
    </nav>
  )
}

export default Nav