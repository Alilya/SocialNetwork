import React from "react";
import style from "./Messages.module.css";

const MessageItem = (props) => {
  return (
    <div className={style.message}>
      {props.message}
    </div>
  );
};

const sendMessage = (props) => {

  let newMessage = React.createRef();

  let sendMessage = () => {
    let textMessage = newMessage.current.value;
    alert(textMessage);
  };
  return (
    <div>
      <textarea ref={newMessage}></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessageItem;