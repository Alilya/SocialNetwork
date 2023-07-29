const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS = 'SET-USERS'

let initialState = {
  users: [
    {
      id: "1",
      name: "Alina",
      location: { city: 'Moscow', country: 'Russia' },
      followed: true,
      status: "Hello world",
      avatarUrl:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    },
    {
      id: "2",
      name: "Vika",
      location: { city: 'Tambov', country: 'Russia' },
      followed: false,
      status: "hi world",
      avatarUrl:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    },
    {
        id: "3",
        name: "Max",
        location: { city: 'Moscow', country: 'Russia' },
        followed: true,
        status: "Hello world",
        avatarUrl:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
      },
      {
        id: "4",
        name: "Sveta",
        location: { city: 'Tambov', country: 'Russia' },
        followed: false,
        status: "hi world",
        avatarUrl:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
      },
  ],
};

const usersReducer =(state=initialState, action)=>{
    switch (action.type) {
      case FOLLOW:
        return {
          ...state,
          users: state.users.map((u) => {
            if (u.id === action.userId) {
              return { ...u, followed: true };
            }
            return u;
          }),
        };

      case UNFOLLOW:
        return {
          ...state,
          users: state.users.map((u) => {
            if (u.id === action.userId) {
              return { ...u, followed: false };
            }
            return u;
          }),
        };
      case SET_USERS:
        return { ...state, users: [...state.users, ...action.users] };
        
      default:
        return state;
    }
}

export const followAC = (userId) => ({
    type: FOLLOW,
    userId,
  });
  
  export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId,
  });

  export const setUsersAC = (users) => ({
    type: SET_USERS,
    users,
  });
  
export default usersReducer;