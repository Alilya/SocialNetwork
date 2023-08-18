import React from "react";
import style from './Photo.module.css'
import cat from "../../../assets/images/cat.webp";

const PhotoAva = (props)=>{
    return <img
    src={props.photo != null ? props.photo : cat}
    alt="catAva"
    className={style.img}
    />
}

export default PhotoAva;