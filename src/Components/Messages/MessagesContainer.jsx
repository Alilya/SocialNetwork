import MessagesAll from "./MessagesAll";
import {
  addMessageActionCreator,
  updateTextMessageActionCreator,
} from "../../redux/messageReducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import WithAuthRedirect from "../../Hoc/WithAuthRedirect";


let mapDispatchToProps = (dispatch) => ({
    onMessageChange:(text)=>{dispatch(updateTextMessageActionCreator(text));},
    sendMessage:()=>{dispatch(addMessageActionCreator());},
});




let mapStateToProps = (state) => ({
  messagesPage: state.messagesPage,
});
debugger;
let AuthRedirectComponent = WithAuthRedirect(MessagesAll);

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default MessagesContainer;
