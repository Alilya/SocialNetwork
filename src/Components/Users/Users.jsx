import React from "react";
import style from './Users.module.css'

let Users = (props) =>{
    // if(props.users.lenght===0){
    //     props.setUsers( [
    //         {
    //         id: "1",
    //         name: "Alina",
    //         location: { city: 'Moscow', country: 'Russia' },
    //         followed: true,
    //         status: "Hello world",
    //         avatarUrl:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    //         },
    //         {
    //         id: "2",
    //         name: "Vika",
    //         location: { city: 'Tambov', country: 'Russia' },
    //         followed: false,
    //         status: "hi world",
    //         avatarUrl:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    //         },
    //         {
    //             id: "3",
    //             name: "Max",
    //             location: { city: 'Moscow', country: 'Russia' },
    //             followed: true,
    //             status: "Hello world",
    //             avatarUrl:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    //         },
    //         {
    //             id: "4",
    //             name: "Sveta",
    //             location: { city: 'Tambov', country: 'Russia' },
    //             followed: false,
    //             status: "hi world",
    //             avatarUrl:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    //         },]
    //     )
    // }

    return (
      <div>
        {props.users.map((u) => (
          <div key={u.id}>
            <div className={style.userBlock}>
              <img src={u.avatarUrl} alt="catAva" className={style.img} />

              <article className={style.name}>{u.name + " "}</article>
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
                <button onClick={() =>{props.follow(u.id)}}
                className={style.buttonFollow}>Follow</button>
              )}

              <section className={style.text}>
                <p>{u.status}</p>
                <p>{u.location.city}</p>
              </section>
            </div>
          </div>
        ))}
      </div>
    );
}

export default Users;