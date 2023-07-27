import {
  addPostActionCreator,
  updateTextPostActionCreator,
} from "../../../redux/profileReducer";
import InputPost from "./InputPost";
import storeContext from "../../../storeContext"; 

const InputPostContainer = () => {
  return (
    <storeContext.Consumer>
      {(store) => {
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let updateTextPost = (text) => {
          store.dispatch(updateTextPostActionCreator(text));
        };
        return (
          <InputPost
            className="InputPost"
            updateTextPost={updateTextPost}
            addPost={addPost}
            post={store.getState().profilePage.postDataBase}
            newPostText={store.getState().profilePage.newPostText}
          />
        );
      }}
    </storeContext.Consumer>
  );
};

export default InputPostContainer;
