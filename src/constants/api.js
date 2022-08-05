import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_HOST,
})

api.interceptors.response.use((res) => {
    return res.data
})
export default api