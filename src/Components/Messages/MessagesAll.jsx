import React from "react";
import style from "./MessageItem/Messages.module.css";
import DialogItem from "./DialogItem/Dialogs";
import MessageItem from "./MessageItem/Messages";
import SendMessage from "./SendMessage";

const MessagesAll = (props) => {

  let messagesElements = props.messages.map((messages) => (
    <MessageItem message={messages.messText} />
  ));

  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  let onSendMessage=() =>{
    props.sendMessage();
  }

  let onMessageChange=(e)=>{
    let text = e.target.value;
    props.onMessageChange(text);
  }
 

  return (
    <div className={style.messages}>
      <div className={style.dialogsItems}>
        {dialogsElements}</div>

      <div className={style.messageItems}>
        {messagesElements}

        <div className={style.sendMessArea}>
          <textarea
            onChange={onMessageChange} type="text" placeholder="Отправьте сообщение"
            value={props.newMessageText} className={style.sendText}>
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
