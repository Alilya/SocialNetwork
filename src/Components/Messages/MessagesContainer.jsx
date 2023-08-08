import MessagesAll from "./MessagesAll";
import {
  addMessageActionCreator,
  updateTextMessageActionCreator,
} from "../../redux/messageReducer";
import { connect } from "react-redux";
import WithAuthRedirect from "../../Hoc/WithAuthRedirect";
import { compose } from "redux";


let mapDispatchToProps = (dispatch) => ({
    onMessageChange:(text)=>{dispatch(updateTextMessageActionCreator(text));},
    sendMessage:()=>{dispatch(addMessageActionCreator());},
});

let mapStateToProps = (state) => ({
  messagesPage: state.messagesPage,
});

export default 
compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(MessagesAll);
