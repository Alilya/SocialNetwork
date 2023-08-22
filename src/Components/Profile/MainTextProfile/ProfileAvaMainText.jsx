import React, { useState } from "react";
import Preloader from "../../common/Preloader/preloader";
import "./ProfileAvaMainText.css";
import ProfileStatus from "./ProfileStatus";
import PhotoAva from "../../common/Photos/PhotoAva";
import InputPostContainer from "../InputPost/InputPostContainer";
import ProfileDataForm from "./ProfileDataForm";

const ProfileAvaMainText = (props) => {
  let [editMode, setEditMode] = useState(false);
  const onAvaPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  if (!props.profile) {
    <Preloader />;
  } else {
    return (
      <div>
        <div className="ProfileAvaMainText backgroundColor borderRadius">
          <div className="profileAva">
            <PhotoAva photo={props.profile.photos.small} />
          </div>
          <div>
            <div className="profileName">
              <span> {props.profile.fullName}</span>
            </div>
            <div className="profileAbout textFamily status">
              <ProfileStatus
                status={props.status}
                updateUserStatus={props.updateUserStatus}
              />
            </div>
            {editMode ? <ProfileDataForm {...props}goToEditMode={()=>setEditMode(false)}  /> : <ProfileData {...props} goToEditMode={()=>setEditMode(true)} />} 
          </div>
          {props.isOwner && (
            <div className="form-group">
              <label className="label">
                <span className="title">Поменять аватарку</span>
                <input type="file" onChange={onAvaPhotoSelected} />
              </label>
            </div>
          )}
        </div>
        <InputPostContainer />
      </div>
    );
  }
};

const ProfileData = ({ goToEditMode, ...props }) => {
  return (
    <div>
    {props.isOwner && (
      <button className="buttonEdit" onClick={goToEditMode}>Редактировать профиль</button>
    )}

    <details className="contacts">
      <summary className="contactsSum">Contacts</summary>
      <div className="profileAbout textFamily">
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contacts
              key={key}
              contactsValue={props.profile.contacts[key]}
              contactsTitle={key}
            />
          );
        })}
        <Contacts contacts={props.profile.contacts} />
      </div>
    </details>
    </div>
  );
};


export const Contacts = ({ contactsTitle, contactsValue }) => {
  return <div> {contactsTitle + " " + contactsValue} </div>;
};

export default ProfileAvaMainText;
