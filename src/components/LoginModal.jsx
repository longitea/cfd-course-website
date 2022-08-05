import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { useAuth } from '../hooks/useAuth'
import { usePage } from '../hooks/usePage'
import authService from '../services/auth'
import userService from '../services/user'
import Input from './Input'

const ErrorMessage = styled.p`
    color: red;
`

const DivHint = styled.div`
  background-color: bisque;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 22px;
    font-family: ab;
    letter-spacing: 0em;
    text-align: center;
    text-transform: uppercase;
  }
  .text {
    padding: 10px;
  }
`

export default function LoginModal() {

  const { setUser } = useAuth()
  const { isOpenLoginModal, setIsOpenLoginModal } = usePage()

  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const [errorInput, setErrorInput] = useState({})
  const [errorAPI, setErrorAPI] = useState('')

  // lấy dữ liệu user input -> API
  const onSubmit = async (ev) => {
    setErrorAPI('')

    // Validate
    const errorObj = {}
    if(!form?.username?.trim()){
      errorObj.username = 'Mail không được để trống'
    } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.username)) {
      errorObj.username = 'Mail không đúng định dạng'
    }

    if(!form?.password?.trim()){
      errorObj.password = 'Password không được để trống'
    }
    setErrorInput(errorObj)
    if(Object.keys(errorObj).length === 0){
      // call Login API
      try {
        const response = await authService.login(form)
        localStorage.setItem( 'login', JSON.stringify(response.data))

        const user = await userService.getInfo()
        setUser(user.data)
        localStorage.setItem( 'user', JSON.stringify(user.data))

        setIsOpenLoginModal(false)

      } catch (error) {
        if(error.response) {
          setErrorAPI(error.response.data.message)
        }
      }
    }
  }

  return ReactDOM.createPortal(
    (
      // param 1: React Element
      <div className="popup-form popup-login" style={{ display: isOpenLoginModal ? 'flex' : 'none' }} onClick={() => setIsOpenLoginModal(false)}>
        <div className="wrap" onClick={ev => ev.stopPropagation()}>
          {/* login-form */}
          <div className="ct_login" style={{ display: 'block' }}>
            <h2 className="title">Đăng Nhập</h2>
            {
              errorAPI && <ErrorMessage>{errorAPI}</ErrorMessage>
            }
            <Input placeholder="Email@gmail.com" error={errorInput.username} onChange={ev => form.username = ev.target.value}/>
            <Input type="password" placeholder="Mật khẩu" onChange={ev => form.password = ev.target.value} error={errorInput.password}/>
            {/* <input type="password" placeholder="Mật khẩu" onChange={ev => form.password = ev.target.value} /> */}
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a href="#" className="forget">Quên mật khẩu?</a>
            </div>
            <button onClick={onSubmit} className="btn rect main btn-login" >đăng nhập</button>
          <DivHint className="Hint">
              <h2 >Account Hint</h2>
              <p className='text'>thanhlong@gmail.com</p>
              <p className='text'>123456789</p>
          </DivHint>
          </div>
        </div>
  
      </div>
    ),
    // param 2: DOM Element
    document.body
  )
}
