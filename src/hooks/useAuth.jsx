import { createContext, useContext, useEffect, useState } from "react"
import userService from "../services/user"
import { useSelector, useDispatch } from 'react-redux'


const AuthContext = createContext({ a: 100 })

let token = localStorage.getItem('login')
if (token) {
    token = JSON.parse(token)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        let _user = localStorage.getItem('user')
        if (_user) {
            _user = JSON.parse(_user)
        }
        return _user
    })
    console.log(user);
    useEffect(() => {
        (async () => {
            if (token) {
                const user = await userService.getInfo()    
                if (user.data) {
                    setUser(user.data)
                }
            }
        })()
    }, [])

    const onLogout = () => {
        setUser()
        localStorage.clear('user')
        localStorage.clear('login')
    }

    return <AuthContext.Provider value={{ user, setUser, onLogout }}>{children}</AuthContext.Provider>
}

// cho tiện sau này đổi tên
// export const useAuth = () => useContext(AuthContext)

// sử dụng hook này để define Action luôn

export const useAuth = () => {
    //thực hiện lấy dữ liệu từ trong store, không nhất thiết phải viết trong đây
    const { user } = useSelector(store => store.auth)
    
    // đefine Action -> reducer
    const dispatch = useDispatch()

    const setUser = (data) => {     
        dispatch({ type: 'auth/setUser', payload: data })
    }

    const onLogout = () => {
        dispatch({ type: 'auth/logout' })
        localStorage.clear('user')
        localStorage.clear('login')
    }

    return { user, setUser, onLogout }
}
