const ADD_MESSAGE = "message/ADD-MESSAGE";

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
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
        let stateCopy = {
          ...state,
          messagesDataBase: [
            ...state.messagesDataBase,
            { id: 8, messText: action.newMessageBody },
          ],
        };
        return stateCopy;
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageBody) => ({
  type: ADD_MESSAGE,
  newMessageBody,
});


export default messageReducer;
