import './NewPostsProfile.css';
import React, { useState } from "react";

const NewPostProfile=(props) => {
  let [likes, setLikes] = useState(0)
  let addLike=()=>{
    setLikes(likes+1)
  }

    return (
      <div>
        <div className="NewPostProfile">
          <img
            src="https://flomaster.club/uploads/posts/2023-01/1674276511_flomaster-club-p-kot-v-ochkakh-risunok-vkontakte-1.jpg"
            className="imgCatPawPost"
          ></img>
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
        </div>
      </div>
    );

}
export default NewPostProfile;