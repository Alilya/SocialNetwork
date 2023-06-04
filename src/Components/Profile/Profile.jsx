
import './Profile.css'
import ProfileAvaMainText from './MainTextProfile/ProfileAvaMainText';
import InputPost from './InputPost/InputPost';
import NewPostProfile from './NewPostProfile/PostsProfile';

const Profile=() => {
    return (
      <div>
        <div className="profile content">
          <ProfileAvaMainText className="ProfileAvaMainText" />
          <InputPost className="InputPost"/>
          <NewPostProfile textPost="Привет!" countLike="15"/>
          <NewPostProfile textPost="Я люблю котиков" countLike="45"/>
        </div>
       
      </div>
    );

}
export default Profile;