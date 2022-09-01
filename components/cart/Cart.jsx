import React,{useState} from 'react';
import style from "../../styles/cart/cart.module.css";
import Item from "./Item";
import {BsCart2 ,BsCreditCard} from "react-icons/bs";
import {motion} from "framer-motion";
import Corder from "./Corder";

const Cart = ({dataRaw}) => {
  const [order,setOrder] = useState(false);
  const [data,setData] = useState(dataRaw);
  const [totalItem,settotalItem] = useState(0);
  const [totalprice,settotalprice] = useState(0);
  const transiriion = {
    duration : 0.3,
    type:"spring"
  }
  React.useEffect(()=>{
    let n =0;
    let t =0;
    data.forEach(element => {
       n = n+element.qnt            
       t = t+element.price * element.qnt;           
    })
    settotalItem(n)
    settotalprice(t)
  },[data])
  return (
    <div className={style.main}>
      {order && <Corder data={data} setOrder={setOrder}/>}
      <h1 className={style.titel}><BsCart2 /> cart</h1>
      <div className={style.container}>
        <div className={style.listCon}>
          <div className={style.list}>
            {data.map(e => <Item key={e.id} data={e} setData={setData}/>)}
          </div>
        </div>
        <div className={style.billCon}>
          {/* biil */}
          <motion.div 
                  initial={{
                    transform: "translateY(-50px)"
                  }}
                  whileInView={
                    {transform:"translateY(0px)"}
                  }
                  transition={transiriion}
          className={style.bill}>
              <div className={style.titelBill}>
                <h1><span><BsCreditCard /></span> Bill</h1>
              </div>
              <div className={style.total}>
                  <p>
                    <h1>total items</h1>
                    <span>{totalItem} pis</span>
                  </p>
                  <p>
                    <h1>total price</h1>
                    <span>{ Math.round(totalprice*10)/10} $</span>
                  </p>
              </div>
              <div className={style.btnsec}>
                <button onClick={()=>setOrder(true)}>check out</button>
              </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Cart