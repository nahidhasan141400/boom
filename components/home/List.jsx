import React,{useState} from 'react';
import style from '../../styles/list.module.css';
import Item from "./Item";
import axios from "axios";
import PageLoad from "../PageLoad";
import {toast} from "react-toastify"

const List = ({nom}) => {
  const [loading,setLoading] = useState(true);
  const [data,setData] = React.useState([]);

  React.useEffect(()=>{
    const getdata = async ()=>{
      try{
        const res = await axios.get("/api/product",{});
        let data = res.data;
        data.splice(nom,data.length - nom)
        setData(data);
        setLoading(false);
      }catch(e){
        console.log(e);
        toast.error("server dont serve data!")
      }
    }
    getdata()
  },[])

  return (
    <div id="menu" className={style.main}>
      <div className={style.titel}>
        <h1>our best menu</h1>
      </div>
      {/*  */}
      <div className={style.menucon}>
        {
          loading? <PageLoad/>:
        data.map((product)=>{
         return (<Item key={product._id} id={product._id} name={product.name} photo={product.image} price={product.price} rating={"4.5"} />)

        })}
      </div>
    </div>
  )
}

export default List;