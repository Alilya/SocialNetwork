import React, { useState } from "react";
import Preloader from "../../common/Preloader/preloader";
import "./ProfileAvaMainText.css";
import ProfileStatus from "./ProfileStatus";
import PhotoAva from "../../common/Photos/PhotoAva";
import InputPostContainer from "../InputPost/InputPostContainer";
import ProfileDataForm from "./ProfileDataForm";

const ProfileAvaMainText = (props) => {
  let [editMode, setEditMode] = useState(false);
  
  if (!props.profile) {
    <Preloader />;
  } else {
    return (
      <div>
        <div className="backgroundColor borderRadius">
          {editMode ? (
            <ProfileDataForm
              {...props}
              goToEditMode={() => setEditMode(false)}
            />
          ) : (
            <ProfileData {...props} goToEditMode={() => setEditMode(true)} />
          )}
          
        </div>
        <InputPostContainer />
      </div>
    );
  }
};

const ProfileData = ({ goToEditMode, ...props }) => {
  return (
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
      {props.isOwner && (
        <button className="buttonEdit" onClick={goToEditMode}>
          ...
        </button>
      )}
  
      

      
    </div>
  );
};

export const Contacts = ({ contactsTitle, contactsValue }) => {
  return (
    <div>
      {" "}
      {contactsTitle || contactsValue
        ? contactsTitle + " " + contactsValue
        : ""}{" "}
    </div>
  );
};

export default ProfileAvaMainText;
