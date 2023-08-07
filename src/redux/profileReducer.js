import { userAPI } from "../API/API";

const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-NEW-TEXT-POST";
const SET_PROFILE = 'SET-PROFILE'

let initialState = {
  postDataBase: [
    { id: 1, post: "Привет", countLike: "15" },
    { id: 2, post: "Я люблю котиков", countLike: "45" },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_POST:
      if (state.newPostText !== "") {
        let newPost = {
          id: 7,
          post: state.newPostText,
          countLike: "0",
        };

        let stateCopy = {
          ...state,
          postDataBase: [newPost, ...state.postDataBase],
          newPostText: "",
        };
        return stateCopy;
      }
      break;

    case UPDATE_POST:
      return { ...state, newPostText: action.textChange };

    case SET_PROFILE:
      return { ...state, profile: action.profile };

    default:
      return state;
  }
};

export const addPost = () => ({
  type: ADD_POST,
});

export const updateTextPost = (text) => ({
  type: UPDATE_POST,
  textChange: text,
});

export const setUsersProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});

export const getUserProfile =(userId)=> (dispatch)=>{
    userAPI.getProfile(userId)
    .then((res) => {
      dispatch(setUsersProfile(res.data));
    });
}


export default profileReducer;
