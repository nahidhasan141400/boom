import React from 'react';
import style from "../../styles/account/nav.module.css";
import {HiViewList,HiChat , HiHeart , HiNewspaper} from "react-icons/hi";
import {FaGg} from "react-icons/fa";
import Link from 'next/link';

const nav = ({nav,setNav}) => {
  return (
    <div className={style.main}>
        <ul>
            <li>
                <a className={nav === "details"?style.ac:""} onClick={()=> {setNav("details")}}> <span><HiViewList/></span> details</a>
            </li>
            <li>
                <a className={nav === "setting"?style.ac:""}  onClick={()=> {setNav("setting")}}> <span><FaGg/></span> setting</a>
            </li>
            <li><Link href="contact"><a > <span><HiChat/></span> contact</a></Link></li>
            <li><a href="#"> <span><HiHeart/></span> about us</a></li>
            <li><a href="#"> <span><HiNewspaper/></span> Blog</a></li>
        </ul>
    </div>
    )
}

export default nav