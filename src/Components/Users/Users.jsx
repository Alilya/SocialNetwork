import React from "react";
import style from "./Users.module.css";
import cat from "../../assets/images/cat.webp";

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
          
            <img
              src={u.photos.small != null ? u.photos.small : cat }
              alt="catAva"
              className={style.img}
            />

            <article className={style.name}>{u.name}</article>
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id);
                }}
                className={style.buttonFollow}
              >
                {" "}
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id);
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
