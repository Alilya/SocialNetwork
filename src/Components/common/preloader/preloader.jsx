import React from "react";
import loader from '../../../assets/images/Ball-1.2s-78px.svg'
import style from "./preloader.module.css";

const Preloader =()=>{
return <img src={loader} className={style.loader}/>
}
export default Preloader;