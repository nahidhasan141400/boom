import React from 'react';
import style from "../../../styles/account/details.module.css";

const details = ({user}) => {
  return (
        <div className={style.main}>
            <div className={style.table}>
                <div className={style.items}>
                    <span>name:</span><span>{user.name? user.name:"name ...."}</span>
                </div>
                <div className={style.items}>
                    <span>email:</span><span>{user.email? user.email:"no email"}</span>
                </div>
                <div className={style.items}>
                    <span>phone:</span><span>{user.phone?user.phone:"no phone number"}</span>
                </div>
                <div className={style.items}>
                    <span>address:</span><span>{user.address?user.address:"no addresss ..."}</span>
                </div>
            </div>
        </div>
    )
}

export default details