import React from "react";
import style from "./MessageItem/Messages.module.css";
import { addMessageActionCreator, updateTextMessageActionCreator } from "../../redux/messageReducer";

const SendMessage = (props) => {
  let addMessage=() =>{
    props.dispatch(addMessageActionCreator());
  }

  let onMessageChange=(e)=>{
    let text = e.target.value;
    props.dispatch(updateTextMessageActionCreator(text));
  }
 
  return (
    <div className={style.sendMessArea}>
        <textarea onChange={onMessageChange} 
        type = "text" placeholder="Отправьте сообщение" 
        value={props.newMessageText}
        className={style.sendText}>

        </textarea>
        <button onClick={addMessage} 
        className={style.sendButton}>Send</button>
      </div>
  );
};


export default SendMessage;