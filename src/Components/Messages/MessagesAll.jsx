import React from 'react';
import style from './MessageItem/Messages.module.css'
import DialogItem from './DialogItem/Dialogs'
import MessageItem from './MessageItem/Messages';
import SendMessage from './SendMessage';

const MessagesAll=(props) => {
  let messagesElements = props.messages.map(
    messages => <MessageItem message={messages.messText}/>);

  let dialogsElements = props.dialogs.map(
    dialog => <DialogItem id={dialog.id} name={dialog.name} />);

    return (
      <div className={style.messages}>
        <div className={style.dialogsItems}>{dialogsElements}</div>
        <div className={style.messageItems}>
          {messagesElements} 
        <SendMessage dispatch={props.dispatch}
         newMessageText={props.newMess}/> 
        </div>
       
      </div>
    );

}
export default MessagesAll;