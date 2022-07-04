import React from 'react';
import style from "../../styles/cart/item.module.css";
import Image from "next/image";
import img from "../../public/img/burgar.png";
import {BsTrash} from "react-icons/bs"

const Item = () => {
  return (
    <div className={style.main}>
      <div className={style.img}>
        <div className={style.imgCon}>
          <Image src={img} alt="" layout='fill' objectFit="contain"/>
        </div>
      </div>
      {/* img end */}
      <div className={style.info}>
        <div className="titel">
          <p>burger</p>
        </div>
        <div className="price">
          <p>120 $</p>
          <p><span>total price</span>120$ </p>
        </div>
        <div className="cuantity">
          <p>cuantyti</p>
          <div className="reng">
            <span><button>+</button></span><span><input type="number" name="" id="" /></span><span><button>-</button></span>
          </div>
        </div>
      </div>
      {/* info end  */}
      <div className="delete">
        <button><BsTrash/></button>
      </div>
    </div>
  )
}

export default Item