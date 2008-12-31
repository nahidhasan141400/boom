import React from 'react';
import style from "../styles/account/account.module.css";
import Header from "../components/account/header";
import Layout from "../components/account/layout";
import axios from "axios";
import {useRouter} from "next/router";

const Account = ({user}) => {


  
  return (
    <div className={style.account}>
      <div className={style.con}>
        <div className={style.header}>

          <Header user={user}/>
        </div>
        
        <div className={style.body}>
          
          <Layout user={user}/>
        </div>
      </div>
    </div>
  )
}
export const getServerSideProps = async (ctx)=>{
  let {boom,offer} = ctx.req.cookies;
  
  let err = null;
  let Props ={
    user:null,
  };
    try{
      const res = await axios.get("http://localhost:3000/api/user",{
        headers:{
          cookies:offer,
          boom
        }
      });
      

      if(res.data.err === "u"){
        return{
          redirect:{
            destination: "/login",
            permanent: false
          }
        }
      }
      else{
        Props.user = res.data;
      }
    }catch(e){
      // console.log(e)
      return{
        redirect:{
          destination: "/login",
          permanent: false
        }
      }
    }
    return{
      props: Props
    }
  }

export default Account;