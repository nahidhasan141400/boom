import React,{useState} from 'react';
import style from '../styles/reg.module.css';
import {BsBox} from 'react-icons/bs';
import axios from "axios";
import Loading from "../components/loading";
import { typographyClasses } from '@mui/material';
import router from "next/router";

const Registration = () => {

  
// name state
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [nameErr,setNameErr]=useState("");

// contact state
  const [email,setEmail] =useState('') ;
  const [phone,setPhone] =useState('') ;
  const [phoneErr, setPhoneErr] = useState("") ;
// password state
  const [password,setPassword] = useState('');
  const [cpassword,setCpassword] = useState('');
  const [passErr,setPassErr] = useState("");
// address state
  const [city,setCity] = useState('');
  const [address,setAddress] = useState('');
  const [addErr,setAddErr] = useState("");
// loding state
  const [load,setLoad] = useState(false);
// global err
  const [error,setErr] = useState('');

// send data to server
  let PostData = async ()=>{
    if(load){
      return
    }
    setErr("")
    // validation data state

    if(fname === "" || lname === ""){
      return setNameErr("plz enter your name!");
    }else{
      setNameErr("");
    }

    if(phone === ""){
      
     return setPhoneErr("plz add phone !")
     alert('ok')
    }else{
       setPhoneErr("");
    }

    if(password === "" || cpassword === ""){
      return setPassErr("plz add password !")
      alert('ok')
     }else{
      setPassErr("");
     }
     
     if(password.length < 6){
      return setPassErr("password must in 6 carecter");
     }else{
      setPassErr("");
     }


     if(password !== cpassword){
      return setPassErr("password not macth!")
     }else{
        setPassErr("");
     }

     if(city === "" || address === ""){
      return setAddErr("plz enter your address !")
      alert('ok')
     }else{
      setAddErr("");
     }

     setLoad(true)

// send post req

     try{

        let res = await axios.post("http://localhost:3000/api/user",{
          name:`${fname} ${lname}`,
          phone,
          email,
          password,
          address :`${city},${address}`,
          image:"/gif/profile.gif"
        });

        console.log("save-1")
        let resData = await res.data;
        console.log("tow-2")
    
        if(res.status === 201){
          setLoad(false);
          router.push("/login")
        }
        if(res.status === 200){
          setLoad(false);
          if(resData.for === "phone"){
            setPhoneErr(resData.err)
          }
        }
     }
     catch(err){
        console.log(err);
        setErr('some thing went wrong !');
        setLoad(false);
     }
  }

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.header}>
            <h1><span><BsBox/></span> Registration</h1>  
        </div> 
        <div id={(error !==""? style.err: null)} className={style.gerr}>
           <h1 className={style.err}>{error}</h1>
        </div>
        <div className={style.formCon}>
          <div id={(nameErr !==""? style.err: null)} className={style.name}>
            <h1 className={style.err}>{nameErr}</h1>
            <input value={fname} onChange={(e)=>setFname(e.target.value)} type="text" placeholder='fast name'/>
            <input value={lname} onChange={(e)=>setLname(e.target.value)} type="text" placeholder='last name'/>
          </div>
          <div id={(phoneErr!==""? style.err: null)} className={style.contact}>
            <h1 className={style.err}>{phoneErr}</h1>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="phone" placeholder='phone'/>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email'/>
          </div>
          <div id={(passErr!==""? style.err: null)} className={style.password}>
          <h1 className={style.err}>{passErr}</h1>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='password'/>
            <input value={cpassword} onChange={(e)=>setCpassword(e.target.value)} type="password" placeholder='conferm password'/>
          </div>
          <div id={(addErr!==""? style.err: null)} className={style.address}>
            <h1 className={style.err}>{addErr}</h1>
            <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder='city'/>
            <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text" placeholder='address'/>
          </div>
          <div className={style.submit}>
            <button  onClick={PostData}>{load?<Loading/>:"submit"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration;