import { userAPI } from "../API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS'

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage:1,
  isFetching: true,
  followingInProgress: [],
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
        return { ...state, users: [...action.users] };

      case SET_CURRENT_PAGE:
        return { ...state, currentPage: action.currentPage };

      case SET_TOTAL_COUNT:
        return { ...state, totalUsersCount: action.totalUsersCount };

      case TOGGLE_IS_FETCHING:
        return { ...state, isFetching: action.isFetching };

      case FOLLOWING_IN_PROGRESS:
          return { ...state, 
            followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id=>id!==action.userId)
           
          };

      default:
        return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });

export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalCount = (totalUsersCount) => ({
  type: SET_TOTAL_COUNT,
  totalUsersCount,
 
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
 
});

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
 
});



export const requestUsers = (currentPage, pageSize)=>{ //getUsersThunkCreator
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setCurrentPage(currentPage));//
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
    });
  };
}

export const unfollow = (userId)=>{ //getUsersThunkCreator
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    userAPI.unfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
}
export const follow = (userId)=>{ //getUsersThunkCreator
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true,userId));
    userAPI.follow(userId).then((data) => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
  };
}

export default usersReducer;