import api from "../constants/api"
// gọi api

export const authService = {
    // Login
    login: function (data) {
        return api.post('/login', data)
    },

    register(data) {
        return api.post('/login', data)
    },

    refreshToken() {}
}

export default authService