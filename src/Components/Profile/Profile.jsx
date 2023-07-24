import './Profile.css'
import ProfileAvaMainText from './MainTextProfile/ProfileAvaMainText';
import InputPost from './InputPost/InputPost';
import Post from './NewPostProfile/Post';

const Profile=(props) => {
    return (
      <div>
        <div className="profile content">
          <ProfileAvaMainText className="ProfileAvaMainText" />
          <InputPost className="InputPost" 
            dispatch={props.dispatch}
            newPostText={props.newPost}/>

          <Post post={props.post} />
        </div>
       
      </div>
    );

}
export default Profile;