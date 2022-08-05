import api from "../constants/api"



const userService = {
    getInfo() {
        const token = JSON.parse(localStorage.getItem('login'))
        return api.get('/user/get-info', {
            headers: {
                Authorization: `Bearer ${token.accessToken}`
            }
        })
    }
}

export default userService 