import React from 'react'
import './InputPost.css'
const InputPost=() => {

  let newPostElement=React.createRef();

  let addPost = () => {
    let data = newPostElement.current.value;
    alert(data);
  };
    return (
        <div className="InputPost backgroundColor borderRadius">
          <textarea ref={newPostElement}
            type="text"
            placeholder="Поделитесь котиком"
            className="textInputLabel textFamily borderRadius"
            
          ></textarea>
          <button className="buttonCatPaw backgroundColorItem borderRadius" onClick={addPost}>
            <img
              src="https://pictures.pibig.info/uploads/posts/2023-04/1681417678_pictures-pibig-info-p-lapka-kota-risunok-vkontakte-4.png"
              className="catPaw"/>
          </button>
        </div>
        
  
    );

}
export default InputPost;