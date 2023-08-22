import './NewPostsProfile.css';
import React, { useState } from "react";
import PhotoAva from '../../common/Photos/PhotoAva';

const NewPostProfile = (props) => {
  let [likes, setLikes] = useState(4)
  let addLike=()=>{
    setLikes(likes+1)
  }
    return (
      <div>
        <div className="NewPostProfile">

          <PhotoAva photo={props.profile.photos.small}/>

          <div className="ContentPost textFamily">{props.textPost}</div>
          <div className="like">
            <button className="likeButton" onClick={addLike}>
              <img
                src="https://mystickermania.com/cdn/stickers/cute-cats/cats-big-heart-512x512.png"
                alt="like"
              />
              <span className="countLike">{likes} </span>
            </button>
          </div>
          {/* <div>
            <button onClick={onDeletePost}>Delete</button>
          </div> */}
        </div>
      </div>
    );

}

export default NewPostProfile;