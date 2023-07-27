import MessagesAll from "./MessagesAll";
import {
  addMessageActionCreator,
  updateTextMessageActionCreator,
} from "../../redux/messageReducer";
import storeContext from "../../storeContext";

const MessagesContainer = (props) => {
  // let state = props.store.getState();

  return (
    <storeContext.Consumer>
      {(store) => {
        let sendMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessageChange = (text) => {
          store.dispatch(updateTextMessageActionCreator(text));
        };

        return (
          <MessagesAll
            messages={store.getState().messagesPage.messagesDataBase}
            dialogs={store.getState().messagesPage.dialogsDataBase}
            newMess={store.getState().newMessageText}
            dispatch={store.dispatch}
            newMessageText={store.getState().messagesPage.newMessageText}
            sendMessage={sendMessage}
            onMessageChange={onMessageChange}
          />
        );
      }}
    </storeContext.Consumer>
  );
};
export default MessagesContainer;
