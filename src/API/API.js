import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "e168b1d0-e82f-4c07-9b95-22c6a39f44fd" },//
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
  
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((res) => res.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`, {}).then((res) => res.data);
  },
};

export const profileAPI={
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
   return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status){
   return instance.put('profile/status', {status})
  },
  savePhoto(file){
    let formData= new FormData();
    formData.append("image", file)
    return instance.put('profile/photo', formData,{headers: {'Content-Type':'multipart/form-data'}})
  }
}

export const authAPI = {
  getMe() {
    return instance.get(`auth/me`, {}).then((res) => res.data);
  },

  login(email, password, rememberMe = false) {
    return instance
      .post("auth/login", { email, password, rememberMe })
      .then((res) => res.data);
  },

  logout() {
    return instance.delete("auth/login").then((res) => res.data);
  },
};

    
 