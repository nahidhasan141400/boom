import React,{useRef,useState} from 'react';
import style from  "../../../styles/account/changeProfile.module.css";
import {FaPowerOff} from 'react-icons/fa';
import Image from "next/image";
import axios from "axios";

const ChangeProfile = ({setChangeProfile}) => {
  let input = useRef();
  const [load,setload] = useState(false);

  function btnClick(){
    input.current.click()
  }
  function InputC(e){
    alert("input file");
    setload(true)
    if (e.target.files[0].size > (10 * 1024 * 1024)) {
      alert("Max file size is 10MB");
      e.target.value = ""; // reset the input
      setload(false)
      return;
    }
    uploadPhoto();
  };
  async function uploadPhoto(){
    let files = input.current.files;
    const formData = new FormData();
    formData.append("myfile", files[0]);

    await axios.post("/api/changePhoto",formData);
    setload(false)
  }

  return (
    <div className={style.main}> 
      <div className={style.conteiner}>
        <div 
        className={style.close}
        onClick={()=> setChangeProfile(false)}
        ><FaPowerOff/></div>
        <div className={style.opration}>
          <input ref={input}
          onChange={(e)=>InputC(e)}
          accept="image" placeholder="choose json file" 
          type="file" name="file" id="photo" />
          <button
            onClick={()=> {load?()=>{}:btnClick()}}
          >
            <span className={`${style.imginput} ${load && style.load}`}>
            <Image alt='' src={'/svg/file.svg'}  layout='fill' objectFit='cover' />
            </span>
             
              <span>upload your photo</span>
          </button>
        </div>
      </div>
    </div> 
  )
}

export default ChangeProfile