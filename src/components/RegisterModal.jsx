import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { usePage } from '../hooks/usePage'


const CommingDiv = styled.div`
  display: flex;
  justify-content: center;
  background: #00afab;
  color: white;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export default function RegisterModal() {

  const { isOpenRegisterModal, setIsOpenRegisterModal } = usePage()
  return ReactDOM.createPortal(
    (
      // param 1: React Element
      <div className="popup-form popup-login" style={{ display: isOpenRegisterModal ? 'flex' : 'none' }} onClick={() => setIsOpenRegisterModal(false)}>
        <div className="wrap">
          <h2 className="title">Đăng Ký</h2>
          <CommingDiv><h1>Comming Soon 😄</h1></CommingDiv>
        </div>
      </div>
    ),
    // param 2: DOM Element
    document.body
  )
}
