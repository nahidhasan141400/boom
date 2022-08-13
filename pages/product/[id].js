import React from 'react';
import style from '../../styles/product/id.module.css';
import Image from "next/image";
import axios from "axios";
import {useRouter} from "next/router";

const Product = () => {
  
  const router = useRouter();
  const id = router.query.id;
  const [product,setProduct] = React.useState({
      _id: "...",
      name: "name",
      price: "000",
      des: "description",
      catagory: "no",
      image: "/img/burgar.png",
      __v: 0
  })

    console.log("id="+id)
  React.useEffect(()=>{
    const id = router.query.id;
    console.log("id="+id)
    const getData = async ()=>{
      try{
        console.log("saart")
        const res = await axios.get("/api/product",{
        headers:{

          id,
          // id:"495bb4d236dc160ffc3d869b",
        }
      });
      console.log(res.data)
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
              <button>add to cart</button>
              <button>order now</button>
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