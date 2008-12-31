import React from 'react';
import style from '../styles/reg.module.css';
import {BsBox} from 'react-icons/bs';

const Registration = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.header}>
            <h1><span><BsBox/></span> Registration</h1>  
        </div> 
        <div className={style.formCon}>
          <div className={style.name}>
            <input type="text" placeholder='fast name'/>
            <input type="text" placeholder='last name'/>
          </div>
          <div className={style.contact}>
            <input type="phone" placeholder='phone'/>
            <input type="email" placeholder='email'/>
          </div>
          <div className={style.password}>
            <input type="text" placeholder='password'/>
            <input type="password" placeholder='conferm password'/>
          </div>
          <div className={style.address}>
            <input type="text" placeholder='city'/>
            <input type="text" placeholder='address'/>
          </div>
          <div className={style.submit}>
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration;