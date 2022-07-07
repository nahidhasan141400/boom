import React from 'react';
import style from "../../styles/order/list.module.css";
import Link from "next/link";

const List = () => {
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.id}>
                <Link href="/order/1234567" ><h1>1242....7889</h1></Link>
            </div>
            <div className={style.status}>
                <h1>confirm</h1>
            </div>
            <div className={style.time}>
                <h1>02:22pm</h1>
            </div>
        </div>
    </div>
  )
}

export default List