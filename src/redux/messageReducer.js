const ADD_MESSAGE ='ADD-MESSAGE';
const SEND_MESSAGE ='UPDATE-NEW-TEXT-MESSAGE';

const messageReducer =(state, action)=>{
  switch (action.type) {
    case ADD_MESSAGE:
      if (state.newMessageText !== "") {
        let newMess = {
          id: 8,
          messText: state.newMessageText,
        };
        state.messagesDataBase.push(newMess);
        state.newMessageText = "";
        return state;
      }
    case SEND_MESSAGE:
      state.newMessageText = action.textChange;
      return state;

    default:
      return state;
  }
}


export const addMessageActionCreator = ()=>({
  type:ADD_MESSAGE
})

export const updateTextMessageActionCreator = (text) => ({
  type: SEND_MESSAGE,
  textChange: text,
});

export default messageReducer;