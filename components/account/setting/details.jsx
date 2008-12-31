import React from 'react';
import style from "../../../styles/account/details.module.css";

const details = () => {
  return (
        <div className={style.main}>
            <div className={style.table}>
                <div className={style.items}>
                    <span>name:</span><span>nahid hasan sagar</span>
                </div>
                <div className={style.items}>
                    <span>email:</span><span>nahidhasan@gmail.com</span>
                </div>
                <div className={style.items}>
                    <span>phone:</span><span>01741413323</span>
                </div>
                <div className={style.items}>
                    <span>address:</span><span>hapaniya zone 2,matlab,chandpur</span>
                </div>
            </div>
        </div>
    )
}

export default details