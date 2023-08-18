import React from "react";
import "./InputPost.css";
import NewPostProfile from "../NewPostProfile/NewPostsProfile";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../Utils/Validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const InputPost = (props)=>{
    let postsElements = props.profilePage.postDataBase.map((post) => (
      <NewPostProfile
        key={post.id}
        textPost={post.post}
        countLike={post.countLike}
      />
    ));

    let addNewPost = (values) => {
      props.addPost(values.newPostBody);
    };
    return (
      <div>
        <AddPostFormRedux onSubmit={addNewPost} /> 
        <div>{postsElements}</div>
      </div>
    );

};

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form
      className="InputPost backgroundColor borderRadius"
      onSubmit={props.handleSubmit}
    >
      <Field
        component={Textarea}
        validate={[required, maxLength10]}
        name="newPostBody"
        type="text"
        placeholder="Поделитесь котиком"
        className="textInputLabel
        textFamily borderRadius"
      ></Field>

      <button className="buttonCatPaw backgroundColorItem borderRadius">
        <img
          src="https://pictures.pibig.info/uploads/posts/2023-04/1681417678_pictures-pibig-info-p-lapka-kota-risunok-vkontakte-4.png"
          className="catPaw"
          alt="Cat"
        />
      </button>
    </form>
  );
};

const AddPostFormRedux = reduxForm({
  form: "AddPostForm",
})(AddPostForm);

export default InputPost;
