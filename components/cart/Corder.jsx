import React,{useState} from 'react';
import {FaPowerOff,FaClipboardCheck} from "react-icons/fa";
import style from '../../styles/cart/order.module.css';
import axios from "axios";
import {toast} from "react-toastify";
import Loading from "../loading";
import router from "next/router"

const Corder = ({data,setOrder}) => {
  const [load , setLoad] = useState(false);
  const [address,setAddress] = useState("");
  const [Chack,setChack] = useState(true);
  


  function resetCart(){
    localStorage.setItem('cart', "[]");
    router.push('/order')
  }

  async function order(){

    if(load){
      return
    }else{  
      setLoad(true);
    }

    try{
      const res = await axios.post('/api/order',{
        address,
        Chack,
        data
      });
      setLoad(false)
      toast("order placed")
      resetCart()
    }catch(e){
      console.log(e);
      toast.error("some thing is wrong!")
      setLoad(false)
    }
  }
  
  return (
    <div className={style.main}> 
      <div className={style.conteiner}>
        <div 
        className={style.close}
        onClick={()=> {setOrder(false)}}
        ><FaPowerOff/></div>
        <div className={style.opration}>
          <h1> <span className={style.his}><FaClipboardCheck/></span>conferm order</h1>
          <div className={style.inputCon}>
          <input
              className={Chack? style.deseble:"demo"} 
              value={address} 
              onChange={(e)=>{Chack?()=>{}:setAddress(e.target.value)} } 
              type="text"
              placeholder='another addresss'/>
          <div className={style.chackboxCon}>
            <input type="checkbox" checked={Chack} onChange={(e)=>setChack(e.target.checked)}/>
            <span>Default <span className={style.hi}>Address</span></span>
            </div>
          </div>
          <h2>payment: <span className={style.hi}>cash on</span></h2>
          <button onClick={order}>{load?<Loading/>:"order"}</button>
        </div>
      </div>
    </div>
  )
};

export default Corder;