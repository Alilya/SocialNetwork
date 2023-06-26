import React from 'react';
import style from './../Messages.module.css'
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
}


let dialogsDataBase = [
  { id: "1", name: "Alina" },
  { id: "2", name: "Vika" },
  { id: "3", name: "Nikita" },
  { id: "4", name: "Pepe" },
];


let dialogsElements = dialogsDataBase.map((dialog) => 
  <DialogItem id={dialog.id} name={dialog.name} />);

export default dialogsElements;