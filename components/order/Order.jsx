import React,{useState,useEffect} from 'react';
import style from "../../styles/order/order.module.css";
import List from "./List";
import {BsPaperclip} from "react-icons/bs";
import axios from "axios";
import {toast} from "react-toastify";

const Order = () => {
  const [isor,setisor] = useState(true);
  const [data,setdata] = useState([]);

  useEffect(()=>{
    let getData = async ()=>{
      try{
        let res = await axios.get("/api/order");
        setdata(res.data)
      }catch(e){
        console.log(e);
        toast.error("some thing is wrong!!")
      }
    }
    getData();
  },[isor])
  return (
    <div className={style.main}>
      <div className={style.titel}>
        <h1><span><BsPaperclip /></span> order</h1>
      </div>
      {isor? ( <div className={style.list}>
        {data.map((el)=><List data={el} key={el._id}/>)}
      </div>):( <h1>no oreder</h1>)}
     
    </div>
  )
}

export default Order;