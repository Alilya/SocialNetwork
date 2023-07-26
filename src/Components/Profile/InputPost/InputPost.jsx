import React from 'react'
import './InputPost.css'
import NewPostProfile from '../NewPostProfile/NewPostsProfile';

const InputPost=(props) => {
  let postsElements=props.post.map(post=>
    <NewPostProfile textPost={post.post} countLike={post.countLike}/>
  )

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange =()=>{
    let text = newPostElement.current.value;
    props.updateTextPost(text);
  }

    return (
      <div>
        <div className="InputPost backgroundColor borderRadius">
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            type="text"
            placeholder="Поделитесь котиком"
            value={props.newPostText}
            className="textInputLabel textFamily borderRadius"
          />

          <button
            className="buttonCatPaw backgroundColorItem borderRadius"
            onClick={onAddPost}
          >
            <img
              src="https://pictures.pibig.info/uploads/posts/2023-04/1681417678_pictures-pibig-info-p-lapka-kota-risunok-vkontakte-4.png"
              className="catPaw"
            />
          </button>
        </div>
        <div>{postsElements}</div>
      </div>
    );

}
export default InputPost;