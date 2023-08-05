import { connect } from "react-redux";
import {
  follow, setCurrentPage,setUsers,unfollow,setTotalCount,toggleIsFetching,toggleFollowingProgress
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";

import Preloader from "../common/preloader/preloader";
import { userAPI } from "../../API/API";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    userAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
      });
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsFetching(true);
    userAPI.getUsers(page, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          users={this.props.users}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
  toggleFollowingProgress,
})(UsersContainer);
