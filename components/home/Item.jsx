import React from 'react'
import style from "../../styles/item.module.css"
import Image from "next/image"
import {motion} from "framer-motion"
import { FaDollarSign , FaCartPlus , FaStar } from "react-icons/fa"

const Item = ({name, photo, price, rating}) => {
  return (
    <motion.div 
        initial={
            {
                transform: "scale(50%)"
            }
        }
        whileInView={
            {
                transform: "scale(100%)"
            }
        }
        transition={{
            duration : 0.5,
            type:"spring"
          }}
    className={style.mainItem}
    
    >
        <div className={style.img}>
            <Image src={photo} alt={name} layout="fill" objectFit='contain'/>
        </div>
        <h1 className={style.name}>{name}</h1>
        <div className={style.price}>
            <span className={style.number}>{price}</span>
            <span className={style.doler}><FaDollarSign/></span>
        </div>
        <div className={style.footer}>
            <div className={style.addtocart}>
                <button><FaCartPlus/> addtocart</button>
            </div>
            <div className={style.rating}><FaStar/>{rating}</div>
        </div>
    </motion.div>
  )
}

export default Item