import React,{useContext} from 'react';
import style from "../styles/nav.module.css";
import Image from 'next/image';
import logo from "../public/img/logo.png";
import {motion} from "framer-motion";
import {FaCartPlus , FaHome , FaPaperclip , FaRegIdCard , FaRing , FaHamburger , FaUser, FaDoorOpen, FaPenSquare } from "react-icons/fa"
import Link from "next/link";
import {useAuth} from "../context/autContext";
import Router from "next/router";
import {toast} from "react-toastify"

const Nav = () => {
  const {login,setLogin} = useAuth();
  
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
    const logoutFN = ()=>{
      var expiry = new Date();
       expiry.setTime(expiry.getTime() - 3600);
       ["offer","boom"].map((name)=>{
        document.cookie = name + "=; expires=" + expiry.toGMTString() + "; path=/";
       });
         setLogin(false);
         toast.info("logout sucssefull .")
         Router.push('/login')
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
                    ><Link href={login?"/order":"/login"}><a ><FaPaperclip />order</a></Link></motion.li>
                    <motion.li 
                        initial={{
                transform: "scale(10%)"
              }}
              whileInView={
                {transform: "scale(100%)"}
              }
              transition={transiriion}
                    >{login?
                      <Link href="/account"><a ><FaRegIdCard />account</a></Link>
                      :<Link href="/registration"><a ><FaPenSquare />Sing up</a></Link>
                    }
                      </motion.li>
                    <motion.li 
                        initial={{
                transform: "scale(10%)"
              }}
              whileInView={
                {transform: "scale(100%)"}
              }
              transition={transiriion}
                    >{
                      login?<a onClick={logoutFN}><FaDoorOpen/>logout</a>:
                      <Link href="/login"><a ><FaRing/>Sing in</a></Link>
                      }</motion.li>
                </ol>
            </div>
        </div>
       </div>
    </nav>
  )
}


export default Nav;

