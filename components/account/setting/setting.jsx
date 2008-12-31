import React from 'react';
import style from "../../../styles/account/setting.module.css";


const Setting = () => {
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
                <input type="text" placeholder='change number' />
                <input type="text" placeholder='enter password' />
                <button>change</button>
              </div>
            </div>
            {/* end  */}
          
            <div className={style.setting}>
              <div className={style.titel}>
                <h1>change passord</h1>
              </div>
              <div className={style.input}>
                <input type="text" placeholder='current password' />
                <input type="text" placeholder='new password' />
                <input type="text" placeholder='conferm password' />
                <button>change</button>
              </div>
            </div>
            {/* end  */}
          </div>
    </div>
    )
}

export default Setting