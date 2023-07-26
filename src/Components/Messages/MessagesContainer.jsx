import MessagesAll from "./MessagesAll";
import { addMessageActionCreator, updateTextMessageActionCreator } from "../../redux/messageReducer";


const MessagesContainer = (props) => {
  let state = props.store.getState();
  
  let sendMessage=() =>{
    props.store.dispatch(addMessageActionCreator());
  }

  let onMessageChange=(text)=>{
    props.store.dispatch(updateTextMessageActionCreator(text));
  }
 
  return (<MessagesAll  
    messages = {state.messagesPage.messagesDataBase}
    dialogs = {state.messagesPage.dialogsDataBase}
    newMess = {state.newMessageText}
    
    dispatch = {props.store.dispatch}
    newMessageText={props.newMess} 
    sendMessage={sendMessage}
    onMessageChange={onMessageChange}
    />)
};
export default MessagesContainer;
