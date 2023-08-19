import { profileAPI} from "../API/API";

const ADD_POST = "profile/ADD-POST";
const SET_PROFILE = 'profile/SET-PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE-POST'

let initialState = {
  postDataBase: [
    { id: 1, post: "Привет", countLike: "15" },
    { id: 2, post: "Я люблю котиков", countLike: "45" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        post: action.newPostBody,
        countLike: "0",
      };

      let stateCopy = {
        ...state,
        postDataBase: [newPost, ...state.postDataBase],
      };
      return stateCopy;

    case DELETE_POST:
      return {
        ...state,
        postDataBase: [...state.postDataBase.filter(p=>p.id!==action.postId)],
      };

    case SET_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const addPost = (newPostBody) => ({
  type: ADD_POST,
  newPostBody
});
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId
});
export const setUsersProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
});


export const getUserProfile =(userId)=> async (dispatch)=>{
    let res = await profileAPI.getProfile(userId)
      dispatch(setUsersProfile(res.data));
}

export const getUserStatus =(userId)=> async (dispatch)=>{
  let res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res.data));
}

export const updateUserStatus =(status)=> async (dispatch)=>{
  let res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
}

export default profileReducer;
