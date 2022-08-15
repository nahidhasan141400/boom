import React from 'react';
import style from "../styles/PageLoad.module.css";
import Image from "next/image";
import lo from "../public/gif/loading.gif"

const PageLoad = () => {
  return (
    <div>
        <div className={style.pageCon}>
            <div className={style.loadingcon}>
                <Image src={lo} alt="" layout='fill' objectFit='contain' />
            </div>
        </div>
    </div>
  )
}

export default PageLoad