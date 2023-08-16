import React from 'react';
import style from './../MessageItem/Messages.module.css'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) =>{
  return (
    <div className={style.dialog}>
      <NavLink
        to={props.id} 
        className={(MesData) =>
           MesData.isActive ? style.active + " " + style.dialog : style.dialog
         }
        >
          {props.name}
      
      </NavLink>
    </div>
  );
};

export default DialogItem;