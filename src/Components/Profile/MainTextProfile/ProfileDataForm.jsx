import React from "react";
import { Contacts } from "./ProfileAvaMainText";

const ProfileDataForm = ({ goToEditMode, ...props }) => {
  return (
    <form>
      <button className="buttonEdit" onClick={goToEditMode}>
        Сохранить изменения
      </button>

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
    </form>
  );
};

export default ProfileDataForm;
