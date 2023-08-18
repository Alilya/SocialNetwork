import React from "react";
import style from "./Users.module.css";
import cat from "../../assets/images/cat.webp";
import { NavLink, Navigate } from "react-router-dom";

let UserCard = ({ user, followingInProgress, isAuth, unfollow, follow }) => {
  const commonFollowUnfollow = (type, text) => {
    return (
      <button
        disabled={followingInProgress.some((id) => id === user.id)}
        onClick={() => {
          if (!isAuth) return <Navigate to="/login" />;
          else {
            type(user.id);
          }
        }}
        className={style.buttonFollow}
      >
        {text}
      </button>
    );
  };

  return (
    <div className={style.userBlock}>
      <NavLink to={"/profile/" + user.id}>
        <img
          src={user.photos.small != null ? user.photos.small : cat}
          alt="catAva"
          className={style.img}
        />
      </NavLink>
      <article className={style.name}>{user.name}</article>
      {user.followed
        ? commonFollowUnfollow(unfollow, "Unfollow")
        : commonFollowUnfollow(follow, "Follow")}

      <section className={style.text}>
        <p>{user.status || "статуса пока нет("}</p>
      </section>
    </div>
  );
};

export default UserCard;
