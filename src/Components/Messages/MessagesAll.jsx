import React from "react";
import style from "./MessageItem/Messages.module.css";
import DialogItem from "./DialogItem/Dialogs";
import MessageItem from "./MessageItem/Messages";
import { Field, reduxForm } from "redux-form";

const MessagesAll = (props) => {

  let messagesElements = props.messagesPage.messagesDataBase.map((messages) => (
    <MessageItem message={messages.messText} key={messages.id}/>
  ));

  let dialogsElements = props.messagesPage.dialogsDataBase.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}/>
  ));

 let addNewMessage =(values)=>{
  props.sendMessage(values.newMessageBody);
 }
  return (
    <div className={style.messages}>
      <div className={style.dialogsItems}>{dialogsElements}</div>

      <div className={style.messageItems}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

const AddMessageForm =(props)=>{
  return (
    <form className={style.sendMessArea} onSubmit={props.handleSubmit}>
      <Field component={'textarea'} name={'newMessageBody'}
        type="text"
        placeholder="Отправьте сообщение"
        className={style.sendText}
      ></Field>

      <button className={style.sendButton}>
        Send
      </button>
    </form>
  );
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

export default MessagesAll;
