import React from "react";
import style from "./MessageItem/Messages.module.css";

const SendMessage = (props) => {
  let newMessage = React.createRef();
  let sendMessage = () => {
    let textMessage = newMessage.current.value;
    alert(textMessage);
  };
   return (
    <div>
        <textarea ref={newMessage} className={style.sendText}></textarea>
        <button onClick={sendMessage} className={style.sendButton}>Send</button>
      </div>
  );
};


export default SendMessage;