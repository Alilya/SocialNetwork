import React from "react";
import style from './Users.module.css'
import axios from "axios";
import cat from '../../assets/images/cat.webp'

let Users = (props) =>{
  // if(props.users.lenght===0){

  axios
    .get("https://social-network.samuraijs.com/api/1.0/users")
    .then((res) => {
      props.setUsers(res.data.items);
    });

  //}
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div className={style.userBlock}>
            <img
              src={u.photos.small != null ? u.photos.small : cat}
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
}

export default Users;