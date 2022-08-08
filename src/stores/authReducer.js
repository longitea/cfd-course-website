import authService from "../services/auth"
import userService from "../services/user"

// lấy thông tin từ Local
let _user = localStorage.getItem('user')
if (_user) {
    _user = JSON.parse(_user)
}

const initialValue = {
    user : _user
}

export const loginAction = (data) => {
    return async (dispatch) => {
        try {
            // setErrorMessage('')
            const res = await authService.login(data.payload)
            localStorage.setItem('login', JSON.stringify(res.data))

            const user = await userService.getInfo()

            dispatch({ type: 'auth/setUser', payload: user.data })
            // setUser(user.data)

            localStorage.setItem('user', JSON.stringify(user.data))
            // setIsOpenLoginModal(false)
            data.success()
        } catch (err) {
            data.error(err)
        }

    }
}


export const authReducer = (state = initialValue, action) => {
    switch(action.type) {
        case 'auth/setUser': 
            return { user: action.payload }
        case 'auth/logout':
            return { user: null }
        default: return state  
    }
}