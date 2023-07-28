import {
  addPostActionCreator,
  updateTextPostActionCreator,
} from "../../../redux/profileReducer";
import InputPost from "./InputPost";
import { connect } from "react-redux";

let mapStateToProps=(state)=>{
  return{
    profilePage:state.profilePage
  }
}
let mapDispatchToProps2=(dispatch)=>{
  return{
    addPost:()=>{ dispatch(addPostActionCreator());},
    updateTextPost:(text)=>{ dispatch(updateTextPostActionCreator(text));},
  }
}
const InputPostContainer = connect(mapStateToProps,mapDispatchToProps2)(InputPost);
export default InputPostContainer;
