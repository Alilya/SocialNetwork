import MessagesAll from "./MessagesAll";
import { addMessageActionCreator } from "../../redux/messageReducer";
import { connect } from "react-redux";
import WithAuthRedirect from "../../Hoc/WithAuthRedirect";
import { compose } from "redux";

let mapDispatchToProps = (dispatch) => ({
    sendMessage:(newMessageBody)=>{dispatch(addMessageActionCreator(newMessageBody));},
});

let mapStateToProps = (state) => ({
  messagesPage: state.messagesPage,
});

export default 
compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(MessagesAll);
