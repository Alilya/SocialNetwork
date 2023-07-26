import React from "react";
import style from "./MessageItem/Messages.module.css";
import DialogItem from "./DialogItem/Dialogs";
import MessageItem from "./MessageItem/Messages";
import SendMessage from "./SendMessage";
import MessagesAll from "./MessagesAll";

const MessagesContainer = (props) => {
  let state = props.store.getState();
  
  return (<MessagesAll  
    messages = {state.messagesPage.messagesDataBase}
    dialogs = {state.messagesPage.dialogsDataBase}
    newMess = {state.newMessageText}
    dispatch = {props.store.dispatch}
    />)
};
export default MessagesContainer;
