import React,{useState} from 'react';
import style from "../../styles/cart/item.module.css";
import Image from "next/image";
import img from "../../public/img/burgar.png";
import {BsTrash} from "react-icons/bs";
import {toast} from 'react-toastify';

const Item = ({data,setData}) => {
  
  function incrise(id){
    const q = 0;
    try{
      const storData = localStorage.getItem('cart');
      const cartData = JSON.parse(storData);
      let opData = cartData.map(element => {
        if(element.id === id){
          element.qnt ++;
          q=element.qnt;
          return element
        }else{
          return element;
        }
      });
      localStorage.setItem('cart', JSON.stringify(opData));
      setData(opData);
    }catch(e){
      console.log(e)
      toast("some thing is wrong")
    }
  }

  function decrise(id){
    const q = 0;
    try{
      const storData = localStorage.getItem('cart');
      const cartData = JSON.parse(storData);
      let opData = cartData.map(element => {
        if(element.id === id){
          element.qnt > 1 ? element.qnt--: element.qnt = 1;
          q=element.qnt;
          return element
        }else{
          return element;
        }
      });
      localStorage.setItem('cart', JSON.stringify(opData));
      setData(opData);
    }catch(e){
      console.log(e)
      toast("some thing is wrong")
    }
  }
  function deleteIt(id){
    try{
      const storData = localStorage.getItem('cart');
      const cartData = JSON.parse(storData);
      const opData = cartData.filter((el)=>{
        return el.id !== id
      })
      localStorage.setItem('cart', JSON.stringify(opData));
      setData(opData);
      toast.success("delete")
    }catch(e){
      console.log(e);
      toast.error("some Thing is wrong")
    }
  }
  return (
    <div className={style.main}>
      <div className={style.img}>
        <div className={style.imgCon}>
          <Image src={data.photo} alt="" layout='fill' objectFit="contain"/>
        </div>
      </div>
      {/* img end */}
      <div className={style.info}>
        <div className={style.titel}>
          <p>{data.name}</p>
        </div>
        <div className={style.price}>
          <p>{data.price} $</p>
          <p><span>total price </span>{Math.round((data.price * data.qnt)*10)/10} $ </p>
        </div>
        <div className={style.cuantity}>
          <p>Quantity</p>
          <div className={style.reng}>
            <span><button onClick={()=>incrise(data.id)}>+</button></span><span><input value={data.qnt} type="number" name="" id="" /></span><span><button onClick={()=> decrise(data.id)}>-</button></span>
          </div>
        </div>
      </div>
      {/* info end  */}
      <div className={style.delete}>
        <button onClick={()=> deleteIt(data.id)} ><BsTrash/></button>
      </div>
    </div>
  )
}

export default Item