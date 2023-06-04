import './PostsProfile.css'

const NewPostProfile=(props) => {
    return (
      <div>
        <div className="NewPostProfile">
          <img
            src="https://flomaster.club/uploads/posts/2023-01/1674276511_flomaster-club-p-kot-v-ochkakh-risunok-vkontakte-1.jpg"
            className="imgCatPawPost"
          ></img>
          <div className="ContentPost textFamily">{props.textPost}</div>

          <div className="like">
            <button className="likeButton">
              <img
                src="https://mystickermania.com/cdn/stickers/cute-cats/cats-big-heart-512x512.png"
                alt="like"
              />
              <span className='countLike'>{props.countLike}</span>
            </button>
          </div>
        </div>
      </div>
    );

}
export default NewPostProfile;