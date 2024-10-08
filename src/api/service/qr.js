import api from "../api";

export const qrAPI = {
    getQR : (data) => api.get(`/popup/qr?link=${data}`, { responseType: 'blob' }),
}