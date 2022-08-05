import { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { PROFILE_COIN_PATH, PROFILE_COURSE_PATH, PROFILE_PATH, PROFILE_PAYMENT_PATH, PROFILE_PROJECT_PATH } from '../constants/path'
import { useAuth } from '../hooks/useAuth'
import { usePage } from '../hooks/usePage'

export default function ProfileLayout() {

    const {user} = useAuth()
    const { setIsOpenLoginModal } = usePage()

    useEffect(() => {
        // Nếu chưa có user thì bật LoginModal lên.
        if(!user) {
            setIsOpenLoginModal(true)
        }
    }, [user])

    // nếu chưa có user thì không show gì ra UI
    if(!user) return null
    
    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src={user.avatar} alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">{user.name}</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink end to={PROFILE_PATH} >Thông tin tài khoản</NavLink>
                            <NavLink to={PROFILE_COURSE_PATH} >Khóa học của bạn</NavLink>
                            <NavLink to={PROFILE_PROJECT_PATH}>Dự án đã làm</NavLink>
                            <NavLink to={PROFILE_PAYMENT_PATH}>Lịch sử thanh toán</NavLink>
                            <NavLink to={PROFILE_COIN_PATH} >Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
