import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "e168b1d0-e82f-4c07-9b95-22c6a39f44fd" },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
  
});

export const userAPI ={
    getUsers (currentPage = 1, pageSize = 10) {
        return instance
          .get(`users?page=${currentPage}&count=${pageSize}`)
          .then((res) => res.data);
      },
}
export const authAPI={
    getAuthMe () {
        return instance
          .get(`auth/me`, {})
          .then((res) => res.data);
      },
}
export const followAPI={
    deleteFollow (id) {
        return  instance
        .delete(`follow/${id}`)
          .then((res) => res.data);
      },
      postFollow (id) {
        return instance.post(`follow/${id}`, {}).then((res) => res.data);
      }
}
    
    
 