import api from '../api';

export const userAPI = {
    login: (data) => api.post("/auth/login", data),
    addUser : (data) => api.post("/auth/signup", data)
}