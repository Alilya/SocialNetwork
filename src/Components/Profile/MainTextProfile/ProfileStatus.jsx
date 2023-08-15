import React, { useState } from "react";
import "./ProfileAvaMainText.css";

const ProfileStatus =(props)=> {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activeEditMode=()=> {
    setEditMode(true);
  }
  const deActiveEditMode=()=> {
    setEditMode(false);
    props.updateUserStatus(status);
  }
  const onStatusChange = (e)=>{
    setStatus(e.currentTarget.value)
  }
  
    return (
      <div>
        {!editMode && (
          <div>
            <span onDoubleClick={activeEditMode}>
              {props.status || "Статуса пока нет("}
            </span>
          </div>
        )}
        {editMode && (
          <div className="profileAbout">
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={deActiveEditMode}
              value={status}
            />
          </div>
        )}
      </div>
    );
  
}

export default ProfileStatus;
