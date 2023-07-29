import {combineReducers, legacy_createStore as createStore} from "redux"; 
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
});

let store =  createStore(reducers);

export default store;