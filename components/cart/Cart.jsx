import React from 'react';
import style from "../../styles/cart/cart.module.css";
import Item from "./Item";
import {BsCart2 ,BsCreditCard} from "react-icons/bs";
import {motion} from "framer-motion"

const Cart = () => {
  const transiriion = {
    duration : 0.3,
    type:"spring"
  }
  return (
    <div className={style.main}>
      <h1 className={style.titel}><BsCart2 /> cart</h1>
      <div className={style.container}>
        <div className={style.listCon}>
          <div className={style.list}>
            {[1,2,3,4,5,6].map(e => <Item key={e}/>)}
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
                    <span>120 pis</span>
                  </p>
                  <p>
                    <h1>total price</h1>
                    <span>100 $</span>
                  </p>
              </div>
              <div className={style.btnsec}>
                <button>check out</button>
              </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Cart