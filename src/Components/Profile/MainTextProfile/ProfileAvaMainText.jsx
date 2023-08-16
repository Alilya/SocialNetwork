import React from 'react';
import Preloader from '../../common/preloader/Preloader/preloader';
import './ProfileAvaMainText.css'
import catPhoto from '../../../assets/images/cat.webp'
import ProfileStatus from './ProfileStatus'

const ProfileAvaMainText=(props) => {
  if(!props.profile){
    <Preloader/>
  }
  else{
    return (
      <div className="ProfileAvaMainText backgroundColor borderRadius">
        <div className="profileAva">
          <img
            src={
              !props.profile.photos.small
                ? catPhoto
                : props.profile.photos.small
            }
          />
        </div>
        <div>
          <div className="profileName">
            <span> {props.profile.fullName}</span>
          </div>
          <div className="profileAbout textFamily">
            <ProfileStatus status={props.status} updateUserStatus ={props.updateUserStatus} />
          </div>
        </div>
      </div>
    );
    }
}
export default ProfileAvaMainText;