import React from 'react';
import "./Profile.css";
import ProfileAvaMainText from "./MainTextProfile/ProfileAvaMainText";
import InputPostContainer from "./InputPost/InputPostContainer";

const Profile = (props) => {
  return (
    <div className="profile content">
      <ProfileAvaMainText
        className="ProfileAvaMainText"
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      <InputPostContainer />
    </div>
  );
}
export default Profile;
