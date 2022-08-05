import { createContext, useContext, useState } from "react";

const Context = createContext({})

export const PageProvider = ({ children }) => {
    const [isOpenLoginModal, setIsOpenLoginModal] = useState(false)
    const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false)


    return <Context.Provider value={{
        isOpenLoginModal, 
        setIsOpenLoginModal, 
        isOpenRegisterModal,
        setIsOpenRegisterModal
    }}>{children}</Context.Provider>
}

export const usePage = () => useContext(Context)







