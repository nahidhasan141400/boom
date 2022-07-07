import React from 'react';
import style from "../../styles/order/order.module.css";
import List from "./List";
import {BsPaperclip} from "react-icons/bs";
let isor = true;

const Order = () => {
  return (
    <div className={style.main}>
      <div className={style.titel}>
        <h1><span><BsPaperclip /></span> order</h1>
      </div>
      {isor? ( <div className={style.list}>
        {[1,2,3,4,5,6].map(i =><List key={i}/>)}
      </div>):( <h1>no oreder</h1>)}
     
    </div>
  )
}

export default Order;