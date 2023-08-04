import React from "react";
import style from "./Users.module.css";
import cat from "../../assets/images/cat.webp";
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize/1000);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
 
  return (
    <div>
      <div className={style.page}>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && style.selectedPage}
              onClick={(e) => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <div className={style.userBlock}>
            <NavLink to={"/profile/" + u.id}>
              <img
                src={u.photos.small != null ? u.photos.small : cat}
                alt="catAva"
                className={style.img}
              />
            </NavLink>
            <article className={style.name}>{u.name}</article>
            {u.followed ? (
              <button
                onClick={() => {
                 
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      { withCredentials: true },
                      {headers:{"API-KEY": "e168b1d0-e82f-4c07-9b95-22c6a39f44fd",}}
                    )
                    .then((res) => {
               
                      if (res.data.resultCode == 0) {
                        props.unfollow(u.id);
                      }
                    });
                }}
                className={style.buttonFollow}
              >
                {" "}
                Unfollow
              </button>) : (
              <button
                onClick={() => {
          
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {},
                      { withCredentials: true },
                      {headers:{"API-KEY": "e168b1d0-e82f-4c07-9b95-22c6a39f44fd",}}
                    )
                    .then((res) => {
                      if (res.data.resultCode == 0) {
                        props.follow(u.id);
                      }
                    });
                }}
                className={style.buttonFollow}
              >
                Follow
              </button>
            )}

            <section className={style.text}>
              <p>{u.status}</p>
              <p>{"u.location.city"}</p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
