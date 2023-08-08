import React from "react";
import "./ProfileAvaMainText.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activeEditMode() {
    this.setState({//выполняется асинхронно
      editMode: true,
    });
    //this.forceUpdate(); костыль
  }
  deActiveEditMode() {
    this.setState({
      editMode: false,
    });
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activeEditMode.bind(this)}>
              {this.props.profile.aboutMe}{" "}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div className="profileAbout">
            <input autoFocus={true} onBlur={this.deActiveEditMode.bind(this)} value={this.props.profile.aboutMe} />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
