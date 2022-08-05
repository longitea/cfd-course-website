// lấy thông tin từ Local
let _user = localStorage.getItem('user')
if (_user) {
    _user = JSON.parse(_user)
}

const initialValue = {
    user : _user
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