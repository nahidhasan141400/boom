import React from 'react';
import style from "../styles/Hero.module.css";
import Image from 'next/image';
import img1 from "../public/img/pizza-baner-1.png";
import img2 from "../public/img/kabab.png"
import img3 from "../public/img/barger.png"

const Hero = () => {
    
    let slider = React.useRef()
    React.useEffect(() => {
        let i = 0;
      let lop = setInterval(() => {
        if(i == 0){
            i = 1;
            slider.current.children[0].style=`transform: translateX(${-100 * i}%)`
            slider.current.children[1].style=`transform: translateX(${-100 * i}%)`
            slider.current.children[2].style=`transform: translateX(${-100 * i}%)`
        }else if(i == 1){
            i = 2
            slider.current.children[0].style=`transform: translateX(${-100 * i}%)`
            slider.current.children[1].style=`transform: translateX(${-100 * i}%)`
            slider.current.children[2].style=`transform: translateX(${-100 * i}%)`
        }else{
            i=0
            slider.current.children[0].style=`transform: translateX(${-100 * i}%)`
            slider.current.children[1].style=`transform: translateX(${-100 * i}%)`
            slider.current.children[2].style=`transform: translateX(${-100 * i}%)`
        }
      }, 5000);
    
      return () => {
        clearInterval(lop);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <div className={style.main}>
        <div className={style.btncon}>
            <button>order now</button>
        </div>
        <div ref={slider} className={style.slider}>
            <div  className={style.imgcon}>
                <Image src={img1} alt="" objectFit='contain' layout='fill'/>
            </div>
            <div  className={style.imgcon}>
                <Image src={img2} alt="" objectFit='contain' layout='fill'/>
            </div>
            <div  className={style.imgcon}>
                <Image src={img3} alt="" objectFit='contain' layout='fill'/>
            </div>
        </div>    
    </div>
  )
}

export default Hero