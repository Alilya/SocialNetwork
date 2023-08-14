import { createSelector } from "reselect";

const getUsersId=(state)=>{
    return state.usersPage.users;
}

//селектор

 export const getUsers=createSelector(getUsersId,(users)=>{
     return users //любые сложные вычисления
 })

export const getPageSize=(state)=>{
    return state.usersPage.pageSize;
}
export const getTotalUsersCount=(state)=>{
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage=(state)=>{
    return state.usersPage.currentPage;
}
export const getIsFetching=(state)=>{
    return state.usersPage.isFetching;
}
export const getFollowingInProgress=(state)=>{
    return state.usersPage.followingInProgress;
}
export const getIsAuth=(state)=>{
    return state.auth.isAuth
}
