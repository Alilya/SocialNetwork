import React from "react";
import style from "./MessageItem/Messages.module.css";
import DialogItem from "./DialogItem/Dialogs";
import MessageItem from "./MessageItem/Messages";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../Utils/Validators";
import { Textarea } from "../common/preloader/FormsControls/FormsControls";

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
const maxLength50 = maxLengthCreator(50);
const AddMessageForm =(props)=>{
  return (
    <form className={style.sendMessArea} onSubmit={props.handleSubmit}>
      <Field component={Textarea} name={'newMessageBody'} validate={[required, maxLength50]}
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
