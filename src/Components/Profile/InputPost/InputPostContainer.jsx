import {addPost} from "../../../redux/profileReducer";
import InputPost from "./InputPost";
import { connect } from "react-redux";

let mapStateToProps=(state)=>{
  return{
    profilePage:state.profilePage
  }
}
let mapDispatchToProps=(dispatch)=>{
  return{
    addPost:(newPostBody)=>{ dispatch(addPost(newPostBody));},
  }
}
const InputPostContainer = connect(mapStateToProps,mapDispatchToProps)(InputPost);
export default InputPostContainer;
