import messageReducer from './messageReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';

let store = {
  _state: {
    profilePage: {
      postDataBase: [
        { id: 1, post: "Привет", countLike: "15" },
        { id: 2, post: "Я люблю котиков", countLike: "45" },
      ],
      newPostText: "",
    },
    messagesPage: {
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
    },
    sideBar: {},
  },
  _rerenderDomTree() {
    console.log("fff");
  },

  rerender(observer) {
    this._rerenderDomTree = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messageReducer(this._state.messagesPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);

    this._rerenderDomTree(this._state)
  },
};

export default store;