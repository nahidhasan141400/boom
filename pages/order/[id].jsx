import React,{useState, useEffect} from 'react';
import style from "../../styles/order/id.module.css";
import {useRouter} from "next/router";
import { BsEmojiSmile, BsListCheck} from "react-icons/bs";
import {FaBicycle, FaSignature} from "react-icons/fa";
import {toast} from "react-toastify";
import axios from "axios";
import status from "../../lib/statusorder";


const Id= () => {
  const [totalp,setto] = useState(0)
  const [data,setData] = useState({
    orderData:[],
    _id:"",
    user:"",
    status:0,
    address:"",
    createdAt:"",
    updatedAt:"",
    __v:0
  })
  const router = useRouter();
  const [id ,setId] = useState(router.query.id);
  useEffect(()=>{
    const getdata = async ()=>{
      let t=0;
      try{
        let res = await axios.get("/api/order",{
          headers:{
            id,
          }
        })
         await res.data.orderData.forEach((i)=>{
          t+= i.price*i.qnt
        })
        await setData(res.data)
        await setto(t)
      }catch(e){
        console.log(e);
        toast.error('some thing is wrong!')
      }
    }
    getdata()
  },[id])
  return (
    <>
    <div className={style.main}>
      <div className={style.titel}>
        <h1><span>#</span>order id: <span className='hi'>{id}</span> </h1>
      </div>
      <div className={style.body}>
        <div className={style.statusbar}>
            <ul>
              <li className={data.status === 1?style.ac:""}>
                    <span><BsListCheck /></span>
                    <p>{status(1)}</p>
              </li>
              <li className={data.status === 2?style.ac:""}>
                <span> <FaSignature /> </span>
                <p>{status(2)}</p>
              </li>
              <li className={data.status === 3?style.ac:""}>
                <span> <FaBicycle /> </span>
                <p>{status(3)}</p>
              </li>
              <li className={data.status === 4?style.ac:""}>
                <span> <BsEmojiSmile /> </span>
                <p>{status(4)}</p>
              </li>
            </ul>
        </div>
        <div className={style.info}>
          <div className={style.left}>
            <div className={style.Lcontent}>
              <div className={style.datainfo}><span className='hi'>delivery:</span> <span>cash on delivery</span></div>
              <div className={style.datainfo}><span className='hi'>currency:</span> <span>dolar</span></div>
              <div className={style.datainfo}><span className='hi'>address:</span> <span>{data.address || "your deafult address"}</span></div>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.Rcontent}>
            <div className={style.datainfo}><span className='hi'>total items:</span> <span>{data.orderData.length}</span></div>
            <div className={style.datainfo}><span className='hi'>total price:</span> <span>{totalp}$</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Id