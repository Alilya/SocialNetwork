import React from "react";
import Paginator from "../common/Paginator/Paginator";
import UserCard from "./UserCard";


let Users = (props) => {
  return (
    <div>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage}
      />
      {props.users.map((u) => (
        <UserCard
          key={u.id}
          user={u}
          followingInProgress={props.followingInProgress}
          isAuth={props.isAuth}
          unfollow={props.unfollow}
          follow={props.follow}
        />))
      }
    </div>
  );
};

export default Users;
