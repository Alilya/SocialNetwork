import { userAPI } from "../API/API";
import { updateObjectInArray } from "../Utils/Helper";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET-USERS";
const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "users/SET-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING";
const FOLLOWING_IN_PROGRESS = "users/FOLLOWING-IN-PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
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
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

//#region action creators
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
//#endregion

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  let data = await userAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalCount(data.totalCount));
};


//#region Follow and Unfollow users
const commonFollowUnfollow = async (userId, actionCreator, apiMethod, dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const unfollow = (userId) => async (dispatch) => {
  commonFollowUnfollow(userId, unfollowSuccess, userAPI.unfollow.bind(userAPI), dispatch);
};

export const follow = (userId) => async (dispatch) => {
  commonFollowUnfollow(userId, followSuccess, userAPI.follow.bind(userAPI), dispatch);
};

//#endregion

export default usersReducer;
