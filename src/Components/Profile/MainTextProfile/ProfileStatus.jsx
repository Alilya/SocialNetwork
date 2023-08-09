import React from "react";
import "./ProfileAvaMainText.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status : this.props.status
  };

  activeEditMode=()=> {
    this.setState({//выполняется асинхронно
      editMode: true,
    });
    //this.forceUpdate(); костыль
  }
  deActiveEditMode=()=> {
    this.setState({
      editMode: false,
      status : this.props.status
    });

    this.props.updateUserStatus(this.state.status);
  }
  onStatusChange = (e)=>{
    this.setState({
      status: e.currentTarget.value,
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.status!== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
  }


  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activeEditMode}>
              {this.props.status || "Статуса пока нет("}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div className="profileAbout">
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deActiveEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
