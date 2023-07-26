import './Profile.css'
import ProfileAvaMainText from './MainTextProfile/ProfileAvaMainText';
import InputPostContainer from './InputPost/InputPostContainer';

const Profile=(props) => {
    return (
      <div>
        <div className="profile content">
          <ProfileAvaMainText className="ProfileAvaMainText" />
          <InputPostContainer  
          store={props.store}
          />
        </div>
      </div> 
    );

}
export default Profile;