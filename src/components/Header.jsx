import { Link } from 'react-router-dom'
import { HOME_PATH, PROFILE_PATH } from '../constants/path'
import { useAuth } from '../hooks/useAuth'
import { usePage } from '../hooks/usePage'

export default function Header() {

    const { user, onLogout } = useAuth()
    
    // khi click -> login popup bật lên
    const {setIsOpenLoginModal, setIsOpenRegisterModal} = usePage()
    const toggleSidebar = () => {
        document.body.classList.toggle('menu-is-show')
    }

    return (
        <header id="header">
            <div className="wrap">
                <div className="menu-hambeger" onClick={toggleSidebar}>
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <Link to={HOME_PATH} className="logo">
                    <img src="/img/logo.svg" alt="" />
                    <h1>CFD</h1>
                </Link>
                <div className="right">
                    {
                        user ? (
                            <div className="have-login">
                                <div className="account">
                                    <a href="#" className="info">
                                        <div className="name">{user.name}</div>
                                        <div className="avatar">
                                            <img src={user.avatar} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <a href="#">Khóa học của tôi</a>
                                    <Link to={PROFILE_PATH}>Thông tin tài khoản</Link>
                                    <a onClick={onLogout}>Đăng xuất</a>
                                </div>
                            </div>
                        ) : (
                            <div className="not-login bg-none">
                                <a className="btn-register" onClick={() => setIsOpenLoginModal(true)}>Đăng nhập</a>
                                <a className="btn main btn-open-login" onClick={() => setIsOpenRegisterModal(true)}>Đăng ký</a>
                            </div>
                        )
                    }

                </div>
            </div>
        </header>
    )
}
