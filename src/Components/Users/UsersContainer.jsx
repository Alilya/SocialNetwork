import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalCountAC } from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((res) => {
          this.props.setUsers(res.data.items);
          this.props.setTotalCount(res.data.totalCount);
        });
       
    }
  
    onPageChanged=(page)=>{
      this.props.setCurrentPage(page);
      axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
    }
  
    render() {
      console.log(this.props.totalUsersCount+ ' this.props.totalCount')
      return (
        <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          users={this.props.users}
        />
      );
    }
};
  

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    };
  };
  
  let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId)=>{
            dispatch(followAC(userId));
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId));
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users));
        },
        setCurrentPage:(currentPage)=>{
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalCount:(totalCount)=>{
            dispatch(setTotalCountAC(totalCount));
        },
        // setTotalCount:(totalCount)=>{
        //     dispatch(setTotalCountAC(totalCount));
        // },
    };
  };


  export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
 
  