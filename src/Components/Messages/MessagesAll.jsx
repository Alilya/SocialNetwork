import React from "react";
import style from "./MessageItem/Messages.module.css";
import DialogItem from "./DialogItem/Dialogs";
import MessageItem from "./MessageItem/Messages";
import { Navigate } from "react-router-dom";


const MessagesAll = (props) => {

  let messagesElements = props.messagesPage.messagesDataBase.map((messages) => (
    <MessageItem message={messages.messText} key={messages.id}/>
  ));

  let dialogsElements = props.messagesPage.dialogsDataBase.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}/>
  ));

  let onSendMessage=() =>{
    props.sendMessage();
  }

  let onMessageChange=(e)=>{
    let text = e.target.value;
    props.onMessageChange(text);
  }
 
  if(!props.isAuth) return <Navigate to='/login'/>
  
  return (
    <div className={style.messages}>
      <div className={style.dialogsItems}>
        {dialogsElements}</div>

      <div className={style.messageItems}>
        {messagesElements}

        <div className={style.sendMessArea}>
          <textarea
            onChange={onMessageChange} type="text" placeholder="Отправьте сообщение"
            value={props.messagesPage.newMessageText} className={style.sendText}>
          </textarea>
          
          <button onClick={onSendMessage} className={style.sendButton}>
            Send
          </button>
     
        </div>

      </div>
    </div>
  );
};
export default MessagesAll;
