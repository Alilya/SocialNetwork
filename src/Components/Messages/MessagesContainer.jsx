import MessagesAll from "./MessagesAll";
import {
  addMessageActionCreator,
  updateTextMessageActionCreator,
} from "../../redux/messageReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange:(text)=>{dispatch(updateTextMessageActionCreator(text));},
    sendMessage:()=>{dispatch(addMessageActionCreator());},
  };
};
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesAll);
export default MessagesContainer;
