import React from 'react';
import style from "../../styles/order/id.module.css";
import {useRouter} from "next/router";
import { BsEmojiSmile, BsListCheck} from "react-icons/bs";
import {FaBicycle, FaSignature} from "react-icons/fa";


const id= () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
    <div className={style.main}>
      <div className={style.titel}>
        <h1><span>#</span>order id:{id}</h1>
      </div>
      <div className={style.body}>
        <div className={style.statusbar}>
            <ul>
              <li className={style.ac}>
                    <span><BsListCheck /></span>
                    <p>oredre place</p>
              </li>
              <li className={style.ac}>
                <span> <FaSignature /> </span>
                <p>order conferm</p>
              </li>
              <li>
                <span> <FaBicycle /> </span>
                <p>on delybery</p>
              </li>
              <li>
                <span> <BsEmojiSmile /> </span>
                <p>Complited</p>
              </li>
            </ul>
        </div>
        <div className={style.info}>
          <div className={style.left}>
            
          </div>
          <div className={style.right}>right</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default id