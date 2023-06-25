import React from 'react';
import style from './Messages.module.css'
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

const MessageItem=(props)=>{
  return(
    <div className={style.message}>{props.message}
    </div>
    
  )
}

let dialogsDataBase = [
  { id: "1", name: "Alina" },
  { id: "2", name: "Vika" },
];

let messagesDataBase = [
  { id: 1, messText: "Hi" },
  { id: 2, messText: "how are you?" },
];

let dialogsElements = dialogsDataBase.map((dialog) => 
  <DialogItem id={dialog.id} name={dialog.name} />);

let messagesElements = messagesDataBase.map(
  (messages) => 
  <MessageItem message={messages.messText}/>);

const Messages=() => {
    return (
      <div className={style.messages}>
        <div className={style.dialogsItems}>{dialogsElements}</div>

        <div className={style.messageItems}>{messagesElements}</div>
      </div>
    );

}
export default Messages;