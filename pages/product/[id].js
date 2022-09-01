import React from 'react';
import style from '../../styles/product/id.module.css';
import Image from "next/image";
import axios from "axios";
import {useRouter} from "next/router";
import {toast} from "react-toastify";

const Product = () => {
  
  const router = useRouter();
  const id = router.query.id;
  const [product,setProduct] = React.useState({
      _id: "...loading",
      name: "name",
      price: "000",
      des: "description ... loading",
      catagory: "no",
      image: "/gif/loading.gif",
      __v: 0
  })
  function addCart(){
    let {_id,name,image,price} = product;
    const obj = {id:_id,name,photo:image,price,qnt:1}
    const storData = localStorage.getItem('cart');
    let storDataObj;
    if(!storData){
        storDataObj = [];
    }else{
        storDataObj = JSON.parse(storData);
    }
    for(let i=0; i< storDataObj.length; i++){
        if(storDataObj[i].id+"a" == obj.id+"a"){
            return toast.error(obj.name+" all ready add!")
        }
    }

    storDataObj.push(obj)
    localStorage.setItem('cart', JSON.stringify(storDataObj));
    toast.success(obj.name+" add to cart")
}

function order(){
  addCart()
  router.push("/cart")

}
  React.useEffect(()=>{
    const id = router.query.id;
    const getData = async ()=>{
      try{
        console.log("saart")
        const res = await axios.get("/api/product",{
        headers:{
          id,
          // id:"495bb4d236dc160ffc3d869b",
        }
      });
      setProduct(res.data);
    }catch(e){
      console.log(e);
    }
    }
    getData()
  },[router.query.id])
  return (
      <div className={style.main}>
        <div className={style.header}>
          <div className={style.con1}>
            <div className={style.imageCon}>
              <div className={style.image}>
                <Image alt="" src={product.image} priority layout="fill" objectFit='contain' />
              </div>
            </div>
          </div>
          <div className={style.con2}>
            <h1 className={style.name}>{product.name}</h1>
            <h2 className={style.price}>Price: {product.price}$</h2>
            <div className={style.action}>
              <button onClick={addCart}>add to cart</button>
              <button onClick={order} >order now</button>
            </div>
          </div>
        </div>
        <div className={style.des}>
          <p>{product.des}
          </p>
        </div>
      </div>
    )
}

export default Product;