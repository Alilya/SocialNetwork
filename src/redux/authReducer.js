import { stopSubmit } from "redux-form";
import { authAPI } from "../API/API";

const SET_USER_DATA = 'auth/SET-USER-DATA';

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


export const getAuthMe = () => async (dispatch) => {
  let data = await authAPI.getMe();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email,password,rememberMe )=> async (dispatch)=>{
  let data = await authAPI.login(email,password,rememberMe )
    if(data.resultCode===0){
       dispatch(getAuthMe());
    }
    else {
      let message = data.messages.length > 0 ? data.messages[0] : "some error";
      dispatch(stopSubmit('login', {_error:message}))
     }
}

export const logout = ()=> async (dispatch)=>{
  let data = await authAPI.logout()
    if(data.resultCode===0){
      dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;