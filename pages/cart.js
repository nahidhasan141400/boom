import React from 'react';
import Empty from "../components/cart/Empty";
import Cart from "../components/cart/Cart";
let isempty = true;
const cart = () => {
  return (
    <div>
        <div style={{paddingTop:"110px"}}></div>
        {isempty?<Empty />:<Cart/>}
    </div>
  )
}

export default cart;
