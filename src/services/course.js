import api from "../constants/api"

const courseService = {
    get(){
        return api.get('/elearning/v4/courses')
    },
    getDetail(id){
        return api.get(`/elearning/v4/courses/${id}`)
    }
}

export default courseService