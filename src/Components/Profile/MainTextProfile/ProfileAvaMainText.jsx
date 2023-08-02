import Preloader from '../../common/preloader/preloader';
import './ProfileAvaMainText.css'

const ProfileAvaMainText=(props) => {
  if(!props.profile){
    <Preloader/>
  }
  else{
    return (
      <div className="ProfileAvaMainText backgroundColor borderRadius">
          <div className="profileAva">
            <img src={props.profile.photos.small} />
          </div>
          
          <div className="profileAbout textFamily">
            <ul>
              <li>{props.profile.name}</li>
              <li>{props.profile.fullName}</li>
              <li>{props.profile.aboutMe}</li>
              
            </ul>
          </div>
      
      
      </div>
    );
    }
}
export default ProfileAvaMainText;