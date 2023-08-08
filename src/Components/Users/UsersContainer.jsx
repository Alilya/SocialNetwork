import { connect } from "react-redux";
import {
  follow, setUsers,unfollow, getUsers
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import { compose } from "redux";
import WithAuthRedirect from "../../Hoc/WithAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.pageSize);
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
          isAuth={this.props.isAuth}
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

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    getUsers
  })
)(UsersContainer)


