import './Profile.css'
import ProfileAvaMainText from './MainTextProfile/ProfileAvaMainText';
import InputPost from './InputPost/InputPost';
import Post from './NewPostProfile/Post';

const Profile=() => {
    return (
      <div>
        <div className="profile content">
          <ProfileAvaMainText className="ProfileAvaMainText" />
          <InputPost className="InputPost"/>
          <Post/>
        </div>
       
      </div>
    );

}
export default Profile;