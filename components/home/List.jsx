import React from 'react';
import style from '../../styles/list.module.css';
import Item from "./Item";
import burger from "../../public/img/burgar.png";
import lassi from "../../public/img/lassi.png";
import chicken from "../../public/img/chick.png";
import samusa from "../../public/img/samusa.png";

const List = () => {
  return (
    <div id="menu" className={style.main}>
      <div className={style.titel}>
        <h1>our best menu</h1>
      </div>
      <div className={style.menucon}>
            <Item name={"burger"} photo={burger} price={"100"} rating={"4.5"} />
            <Item name={"milk lassi"} photo={lassi} price={"10"} rating={"4.3"} />
            <Item name={"samusa"} photo={samusa} price={"0.10"} rating={"4.8"} />
            <Item name={"burger"} photo={burger} price={"100"} rating={"4.5"} />
            <Item name={"chicken fried"} photo={chicken} price={"15"} rating={"4.5"} />
            <Item name={"burger"} photo={burger} price={"100"} rating={"4.5"} />
            <Item name={"milk lassi"} photo={lassi} price={"10"} rating={"4.3"} />
            <Item name={"burger"} photo={burger} price={"100"} rating={"4.5"} />
            <Item name={"chicken fried"} photo={chicken} price={"15"} rating={"4.5"} />
            <Item name={"samusa"} photo={samusa} price={"0.10"} rating={"4.8"} />
      </div>
    </div>
  )
}

export default List;