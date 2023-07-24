import React from 'react'
import './InputPost.css'
const InputPost=(props) => {

  let newPostElement=React.createRef();

  let addPost = () => {
    props.dispatch({type:'ADD-POST'});
  };

  let onPostChange =()=>{
    let action = { 
      type:'UPDATE-NEW-TEXT-POST',
      textChange: newPostElement.current.value,
    };
    props.dispatch(action);
  }

    return (
        <div className="InputPost backgroundColor borderRadius">
          <textarea onChange={onPostChange} ref={newPostElement} 
          type="text" placeholder="Поделитесь котиком" 
          value={props.newPostText}
            className="textInputLabel textFamily borderRadius" />

          <button className="buttonCatPaw backgroundColorItem borderRadius" onClick={addPost}>
            <img
              src="https://pictures.pibig.info/uploads/posts/2023-04/1681417678_pictures-pibig-info-p-lapka-kota-risunok-vkontakte-4.png"
              className="catPaw"/>
          </button>
        </div>
        
  
    );

}
export default InputPost;