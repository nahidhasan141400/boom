import React from 'react';
import style from "../../styles/order/list.module.css";
import Link from "next/link";
import time from "../../lib/formateDate";
import status from "../../lib/statusorder";

const List = ({data}) => {
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.id}>
                <Link href={`/order/${data._id}`} ><h1>{`${data._id.slice(0,9)}...`}</h1></Link>
            </div>
            <div className={style.status}>
                <h1 className="hi">{status(data.status)}</h1>
            </div>
            <div className={style.time}>
                <h1>{time(data.updatedAt)}</h1>
            </div>
        </div>
    </div>
  )
}

export default List