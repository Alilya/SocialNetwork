import React from 'react';
import style from './Messages.module.css'
import dialogsElements from './Dialogs/Dialogs'


const MessageItem=(props)=>{
  return(
    <div className={style.message}>{props.message}
    </div>
    
  )
}

let messagesDataBase = [
  { id: 1, messText: "Hi" },
  { id: 2, messText: "how are you?" },
];

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