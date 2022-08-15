import React from 'react'
import style from "../../styles/item.module.css"
import Image from "next/image"
import {motion} from "framer-motion";
import { FaDollarSign , FaCartPlus , FaStar } from "react-icons/fa";
import Link from "next/link";
import {toast} from 'react-toastify';


const Item = ({ id='1234' ,name, photo, price, rating}) => {

    function addCart(){
        const obj = {id,name,photo,price,qnt:1}
        const storData = localStorage.getItem('cart');
        let storDataObj;
        if(!storData){
            storDataObj = [];
        }else{
            storDataObj = JSON.parse(storData);
        }
        for(let i=0; i< storDataObj.length; i++){
            if(storDataObj[i].id+"a" == obj.id+"a"){
                return toast.error(obj.name+" all ready add!")
            }
        }

        storDataObj.push(obj)
        localStorage.setItem('cart', JSON.stringify(storDataObj));
        toast.success(obj.name+" add to cart")
    }
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
        <Link href={`/product/${id}`}>
            <div className={style.img}>
                <Image src={photo} alt={name} layout="fill" objectFit='contain'/>
            </div>
        </Link>
        <Link href={`/product/${id}`}>
            <h1 className={style.name}>{name}</h1>
        </Link>
        <div className={style.price}>
            <span className={style.number}>{price}</span>
            <span className={style.doler}><FaDollarSign/></span>
        </div>
        <div className={style.footer}>
            <div className={style.addtocart}>
                <button onClick={addCart} ><FaCartPlus/> addtocart</button>
            </div>
            <div className={style.rating}><FaStar/>{rating}</div>
        </div>
        
    </motion.div>

  )
}

export default Item