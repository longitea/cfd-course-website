import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import LoginModel from '../components/RegisterModal'
import RegisterModal from '../components/LoginModal'

export default function MainLayout() {

    return (
        <>
            <Header />
            <Sidebar />
            <Outlet />
            <LoginModel />
            <RegisterModal />
            <Footer />
        </>

    )
}
