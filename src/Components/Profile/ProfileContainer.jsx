import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUsersProfile } from "../../redux/profileReducer";
import { useParams } from 'react-router-dom';
import getProfile from "./../../redux/profileReducer"
import { userAPI } from "../../API/API";

export function withRouter(Children){

  return(props)=>{
     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }

}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId=2;
    }
    //this.props.getProfile(this.props);
    userAPI.getUsersProfile(userId)
    .then((data) => {
      this.props.setUsersProfile(data);
    });
    
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile}/>;
  }
}


let mapStateToProps=(state)=>({
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {setUsersProfile, getProfile})(withRouter(ProfileContainer));
