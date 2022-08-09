import React from 'react';
import style from '../../styles/product/id.module.css';
import Image from "next/image"

const Product = () => {
  return (
      <div className={style.main}>
        <div className={style.header}>
          <div className={style.con1}>
            <div className={style.imageCon}>
              <div className={style.image}>
                <Image alt="" src={'/img/burgar.png'}  layout="fill" objectFit='contain' />
              </div>
            </div>
          </div>
          <div className={style.con2}>
            <h1 className={style.name}>Hot Burger</h1>
            <h2 className={style.price}>Price: 20$</h2>
            <div className={style.action}>
              <button>add to cart</button>
              <button>order now</button>
            </div>
          </div>
        </div>
        <div className={style.des}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti totam magni nostrum laudantium? Illo, soluta? Architecto impedit ipsa excepturi consequatur quisquam enim eos? Sit repudiandae in voluptates velit rerum laborum!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reiciendis quod accusantium! Illum, nisi odio? Velit in commodi libero adipisci quis aliquam nemo id? Omnis, nobis veritatis. Eum, culpa voluptatem!
          </p>
        </div>
      </div>
    )
}

export default Product;