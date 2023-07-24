
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


  _addPost(){
  if (this._state.profilePage.newPostText !== "") {
    let newPost = {
      id: 7,
      post: this._state.profilePage.newPostText,
      countLike: "0",
    };
    this._state.profilePage.postDataBase.unshift(newPost);
    this._rerenderDomTree(this._state);
    this._state.profilePage.newPostText = "";
  }
  },

  _updateNewTextPost(textChange){
    this._state.profilePage.newPostText = textChange;
    this._rerenderDomTree(this._state);
  }, 

  _addMessage(){
    let newMess = {
      id: 8,
      messText: this._state.messagesPage.newMessageText,
    };
    this._state.messagesPage.messagesDataBase.push(newMess);
    this._rerenderDomTree(this._state);
    this._state.messagesPage.newMessageText = "";
  },

_updateNewTextMessage(textChange){
  this._state.messagesPage.newMessageText = textChange;
  this._rerenderDomTree(this._state);
},


  dispatch(action){
    if (action.type ==='ADD-POST'){
      this._addPost();
    }
    else if(action.type ==='UPDATE-NEW-TEXT-POST'){
      this._updateNewTextPost(action.textChange);
    }
    else if(action.type ==='ADD-MESSAGE'){
      this._addMessage();
    }
    else if(action.type ==='UPDATE-NEW-TEXT-MESSAGE'){
      this._updateNewTextMessage(action.textChange);
    }
  }
  
};


export default store;