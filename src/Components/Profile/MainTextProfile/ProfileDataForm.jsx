import React from "react";
import { Contacts } from "./ProfileAvaMainText";
import PhotoAva from "../../common/Photos/PhotoAva";
import ProfileStatus from "./ProfileStatus";
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../common/FormsControls/FormsControls";
import "./ProfileAvaMainText.css";


const ProfileDataForm = ({ goToEditMode, ...props }) => {
  const onAvaPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className="ProfileAvaMainText backgroundColor borderRadius">
      <div className="profileAva">
        <PhotoAva photo={props.profile.photos.small} />
      </div>
      <div>
        <div className="profileEdit">
          <span className="editText"> Name: 
            {" "}
            <Field
              placeholder="name"
              name="name"
              component={Input}
              
            />
          </span>
          </div>
          <div className="profileEdit">
          <span className="editText"> My skills: 
            {" "}
            <Field
              placeholder="My skills"
              name="skills"
              component={Textarea}
              
            />
          </span>
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
        {props.isOwner && (
          <div className="form-group">
            <label className="label">
              <span className="title">Поменять аватарку</span>
              <input type="file" onChange={onAvaPhotoSelected} />
            </label>
          </div>
        )}

        
      </div>
      <form>
          <button className="buttonEdit" onClick={goToEditMode}>
            Сохранить изменения
          </button>
          
        </form>
   </div>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: 'editProfile',
})(ProfileDataForm)


export default ProfileDataReduxForm;
