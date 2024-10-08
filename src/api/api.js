import axios from "axios";
import { getCookie, removeCookie, setCookie } from "../utils/cookieUtil";

const api = axios.create({
    // baseURL: `${process.env.REACT_APP_REST_SERVER}`,
    baseURL: "http://localhost:8080/api",
    withCredentials: true
});

api.interceptors.request.use(
    (config) => {
        const token = getCookie("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            delete config.headers.Authorization;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

api.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalReq = err.config;
        // if (err.response.status == 403 && !originalReq._retry) {
        //     originalReq._retry = true;
        //     try {
        //         const response = await refreshTokenHandler();
        //         if (response.status === 200) {
        //             setCookie("accessToken", response.data.accessToken);
        //             originalReq.headers.Authorization = `Bearer ${response.data.accessToken}`;
        //             return api.request(originalReq);
        //         }
        //     } catch (error) {
        //         console.log("토큰 재발급 실패");
        //         removeCookie("accessToken");
        //     }
        // }
        return Promise.reject(err);
    }
);

const refreshTokenHandler = async () => {
    try {
        const response = await api.post("/auth/refresh-token");
        return response;
    } catch (error) {
        throw error;
    }
}

export default api;