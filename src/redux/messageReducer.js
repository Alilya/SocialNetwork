const ADD_MESSAGE ='ADD-MESSAGE';
const SEND_MESSAGE ='UPDATE-NEW-TEXT-MESSAGE';

let initialState = {
  dialogsDataBase: [
    { id: "1", name: "Alina" },
    { id: "2", name: "Vika" },
    { id: "3", name: "Nikita" },
    { id: "4", name: "Pepe" },
    { id: "5", name: "Alina" },
    { id: "6", name: "Vika" },
    { id: "7", name: "Nikita" },
    { id: "8", name: "Pepe" },
  ],
  messagesDataBase: [
    { id: 1, messText: "Hi" },
    { id: 2, messText: "how are you?" },
    { id: 3, messText: "Hi" },
    { id: 4, messText: "how are you?" },
    { id: 5, messText: "how are you?" },
    { id: 6, messText: "Hi" },
    { id: 7, messText: "how are you?" },
  ],
  newMessageText: "",
};

const messageReducer =(state=initialState, action)=>{
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