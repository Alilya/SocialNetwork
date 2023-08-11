import { authAPI } from "../API/API";
import { uncorrect } from "../Utils/Validators";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer =(state=initialState, action)=>{
    switch (action.type) {
      case SET_USER_DATA:
        return{
            ...state,
            ...action.payload, 
        }
      default:
        return state;
    }
}

export const setAuthUserData = (userId,email,login, isAuth) => ({
  type: SET_USER_DATA,
  payload:{userId,email,login,isAuth}
 
});


export const getAuthMe = ()=>(dispatch)=>{
  authAPI.getAuthMe().then((data) => {
    if(data.resultCode===0){
        let {id,email,login}=data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
  });
}

export const login = (email,password,rememberMe )=>(dispatch)=>{
  authAPI.login(email,password,rememberMe ).then((data) => {
    if(data.resultCode===0){
       dispatch(getAuthMe());
    }
    else {
      alert(data.messages)
    }
  });
}

export const logout = ()=>(dispatch)=>{
  authAPI.logout().then((data) => {
    if(data.resultCode===0){
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
}


export default authReducer;