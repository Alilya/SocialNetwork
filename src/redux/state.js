import {rerenderDomTree} from '../render'
let state = {
    profilePage:{
        postDataBase :[
            {id: 1, post: "Привет", countLike: "15" },
            { id: 2, post: "Я люблю котиков", countLike: "45" },
        ], 
        newPostText:''
    },
    messagesPage:{
        dialogsDataBase :[
            { id: "1", name: "Alina" },
            { id: "2", name: "Vika" },
            { id: "3", name: "Nikita" },
            { id: "4", name: "Pepe" },
            { id: "5", name: "Alina" },
            { id: "6", name: "Vika" },
            { id: "7", name: "Nikita" },
            { id: "8", name: "Pepe" },
          ],
          messagesDataBase : [
            { id: 1, messText: "Hi" },
            { id: 2, messText: "how are you?" },
            { id: 3, messText: "Hi" },
            { id: 4, messText: "how are you?" },
          ],
    }
 
    
};

export let addPost = (postMessage) =>{
    if(postMessage!=''){
    let newPost={
        id:7,
        post: postMessage,
        countLike:"11",
    }
    state.profilePage.postDataBase.unshift(newPost);
    rerenderDomTree(state);
    }
}

export let NewTextPostChange = (textChange) => {
  state.profilePage.newPostText = textChange;
  rerenderDomTree(state);
};

export default state;