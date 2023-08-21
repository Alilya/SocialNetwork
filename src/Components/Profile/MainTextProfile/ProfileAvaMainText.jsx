import React from 'react';
import Preloader from '../../common/Preloader/preloader';
import './ProfileAvaMainText.css'
import ProfileStatus from './ProfileStatus'
import PhotoAva from '../../common/Photos/PhotoAva';

const ProfileAvaMainText=(props) => {
  const onAvaPhotoSelected=(e)=>{
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
    
  }

  if(!props.profile){
    <Preloader/>
  }
  else{
    return (
      <div className="ProfileAvaMainText backgroundColor borderRadius">
        <div className="profileAva">
          <PhotoAva photo={props.profile.photos.small}/>
         
        </div>
        <div>
          <div className="profileName">
            <span> {props.profile.fullName}</span>
          </div>
          <div className="profileAbout textFamily">
            <ProfileStatus
              status={props.status}
              updateUserStatus={props.updateUserStatus}
            />
          </div>
        </div>
          {props.isOwner && 
          ( <div className="form-group">
          <label className="label">
            <span className="title">Поменять аватарку</span>
            <input type="file" onChange={onAvaPhotoSelected} />
          </label>
        </div>)
 }
       
      </div>
    );
    }
}

export default ProfileAvaMainText;