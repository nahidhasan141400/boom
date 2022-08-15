import React,{useState,useEffect} from 'react';
import Empty from "../components/cart/Empty";
import Cart from "../components/cart/Cart";
import PageLoad from "../components/PageLoad";

const Cart2 = () => {
  const [isempty,setisempty] = useState(true);
  const [loading,setLoading] = useState(true);
  let [cartData,setCartData]= useState();

  useEffect(()=>{
    const storData = localStorage.getItem('cart');
    if(!storData || storData == "[]"){
      return setLoading(false)
    }else{
      setLoading(false)
      setisempty(false)
    }
    setCartData(JSON.parse(storData))
    
  },[])
  return (
    <div>
        <div style={{paddingTop:"110px"}}></div>
          {loading? <PageLoad/> : isempty? <Empty /> : <Cart dataRaw={cartData}/> }

        
        
    </div>
  )
}

export default Cart2;
