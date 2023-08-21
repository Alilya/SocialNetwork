import React from 'react';
import "./Profile.css";
import ProfileAvaMainText from "./MainTextProfile/ProfileAvaMainText";
import InputPostContainer from "./InputPost/InputPostContainer";

const Profile = (props) => {
  return (
    <div className="profile content">
      <ProfileAvaMainText
        isOwner={props.isOwner}
        className="ProfileAvaMainText"
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        savePhoto = {props.savePhoto}
      />
      <InputPostContainer/>
    </div>
  );
}
export default Profile;
