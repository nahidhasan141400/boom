import React from 'react';
import style from "../../../styles/account/setting.module.css";
import axios from "axios";
import Loading from "../../loading";
import {toast} from "react-toastify";

const Setting = ({setUser}) => {
  const [load,setLoad] = React.useState(false);
  // change phone number 
  const [cphonepass, setcphonepass] = React.useState('')
  const [cphone , setcphone] = React.useState('')

  async function chanePhone (){
    if(load){
      return 
    }
    setLoad(true);
    if(cphonepass === '' || cphone === ""){
      setLoad(false);
       return toast.error("fill the input!")
    }

    try{
       const {data} = await axios.post('/api/changePhone',{
        password:cphonepass,
        number:cphone
      },{
        new:true
      })
      console.log(data)
      toast('phone number change')
      setLoad(false)
      setUser(data)
    }catch(e){
      console.log(e);
      toast.error("some thing is wrong!");
      setLoad(false)
    }

  }
// change password 
const [cpassword,setCpassword] = React.useState('');
const [newpassword,setNewpassword] = React.useState('');
const [newCpassword,setNewCpassword] = React.useState('');

  async function changePassword (){
    if(load){
      return 
    }
    setLoad(true);
    if(!cpassword && !newpassword && !newCpassword){
      setLoad(false);
      return toast.error('pleass enter your password');
    }
    if(newpassword.length !== 6){
      setLoad(false);
      return toast.error("password mustbe in 6 word")
    }

    if(newpassword !== newCpassword){
      setLoad(false);
      return toast.error(" New password are not same!");
    }
    try{
      await axios.post("/api/changePassword",{newpassword,password:cpassword});
      toast.info('password change sucssesfull')
      setLoad(false);
      setCpassword("")
      setNewpassword("")
      setNewCpassword("")
    }catch(e){
      console.log(e)
      toast.error("some thing is wrong!")
      setLoad(false)
    }
  }

  return (
    <div className={style.main}>
          <div className={style.con}>
          <div className={style.setting}>
              <div className={style.titel}>
                <h1>change address</h1>
              </div>
              <div className={style.input}>
                
                <button>change</button>
              </div>
            </div>
            {/* end  */}
          <div className={style.setting}>
              <div className={style.titel}>
                <h1>change number</h1>
              </div>
              <div className={style.input}>
                  
                <input onChange={(e)=>setcphone(e.target.value)} value={cphone} type="text"  placeholder='change number'  />

                <input onChange={(e)=>setcphonepass(e.target.value)} value={cphonepass} type="text" placeholder='enter password'/>
                
                <button
                  onClick={chanePhone}
                >{load? <Loading/> : "change"}</button>
              </div>
            </div>
            {/* end  */}
          
            <div className={style.setting}>
              <div className={style.titel}>
                <h1>change passord</h1>
              </div>
              <div className={style.input}>
                <input 
                  value={cpassword} onChange={(e)=>setCpassword(e.target.value)}
                  type="text" placeholder='current password' />
                <input 
                  value={newpassword} onChange={(e)=>setNewpassword(e.target.value)}
                  type="text" placeholder='new password' />
                <input 
                  value={newCpassword} onChange={(e)=>setNewCpassword(e.target.value)}
                  type="text" placeholder='conferm password' />
                <button onClick={changePassword}>{load? <Loading/> : "change"}</button>
              </div>
            </div>
            {/* end  */}
          </div>
    </div>
    )
}

export default Setting