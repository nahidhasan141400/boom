import React,{useState} from 'react';
import Image from "next/image"
import style from "../styles/login.module.css";
import boomlogo from "../public/img/logo.png";
import Link from "next/link";
import Loading from "../components/loading";
import axios from "axios";
import Router from "next/router";
import {useAuth} from "../context/autContext";
import {toast} from "react-toastify";

const Login = () => {
  const [phone,setPhone] = useState("");
  const [password,setpassword] = useState("");
  const [err,seterr] = useState("");
  const [loading,setloading] = useState(false);
  const {setLogin} = useAuth();




  const loginHandler = async ()=>{
    if(loading){
      return
    }
    if(phone === ""|| password === ""){
      return seterr("fill the information !!")
    }

    try{
      setloading(true);
      let res = await axios.post("/api/login",{phone,password});
     
      if(res.data.err){
        seterr("some thing is wrong!!");
        setloading(false);
      }else{
        seterr("")
        setLogin(true)
        toast.info('login sucssesfull')
        Router.push("/")
      }
    }catch(e){
      console.log(e);
      seterr("some thing is wrong!!");
      setloading(false);
    }

  }

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.blockSq}></div>
        <div className={style.blockCr}></div>
        <div className={style.imgLogo}>
            <Image src={boomlogo} layout="fill" objectFit='contain' alt='boom'/>
        </div>
        <h1 className={style.titel}>login</h1>
        <div className={err === ""? null : style.err}>{err}</div>
        <div className={style.form} >
          <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder='phone'/>
          <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder='password'/>
          <button onClick={loginHandler}>{loading? <Loading /> :"login"}</button>
        </div>
        <a href="#">forget password</a>
        <Link href="registration"><a >create a account</a></Link>

      </div>
    </div>
  )
}

export default Login