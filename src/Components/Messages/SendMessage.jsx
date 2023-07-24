import React from "react";
import style from "./MessageItem/Messages.module.css";

const SendMessage = (props) => {
  let newMessage = React.createRef();

  let addMessage=() =>{
    props.dispatch({type: 'ADD-MESSAGE'});
  }

  let onMessageChange=()=>{
    let textMess = newMessage.current.value;
    props.dispatch({type:'UPDATE-NEW-TEXT-MESSAGE', textChange: textMess});
  }
 
  return (
    <div className={style.sendMessArea}>
        <textarea onChange={onMessageChange} ref={newMessage} className={style.sendText}></textarea>
        <button onClick={addMessage} className={style.sendButton}>Send</button>
      </div>
  );
};


export default SendMessage;