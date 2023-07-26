import {
  addPostActionCreator,
  updateTextPostActionCreator,
} from "../../../redux/profileReducer";
import InputPost from "./InputPost";

const InputPostContainer = (props) => {
  let state=props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let updateTextPost = (text) =>{
   props.store.dispatch(updateTextPostActionCreator(text));
  }

  return (
    <InputPost className="InputPost"
      updateTextPost={updateTextPost}
      addPost={addPost}
      post={state.profilePage.postDataBase}
      newPostText={state.newPostText}
      store={props.store}
    />
  );
};

export default InputPostContainer;
