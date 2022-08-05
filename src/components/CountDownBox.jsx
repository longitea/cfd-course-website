import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CountDownBoxRoot = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    color: white;
    background: red;
    // opacity: 0;
    // transform: translate(100px, 0);
    // transition: all .3s ease-in;
    // &.fade-in{
    //     opacity: 1;
    //     transform: translate(0, 0);
    // }
`

const ButtonWrap = styled.button`
    padding: 10px 20px;
    margin: 0 20px;
`

export default function CountDownBox({ cal }) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // let timer = setInterval(() => {
        //     console.log('interval', count)
        // }, 1000)

        // return () => {
        //     clearInterval(timer)
        // }
        // console.log('useEffect')
        // function scroll() {
        //     console.log('scroll')
        //     let position = document.getElementById('random-id').getBoundingClientRect()
        //     if (position.y < 300) {
        //         document.getElementById('random-id').classList.add('fade-in')
        //     } else {
        //         document.getElementById('random-id').classList.remove('fade-in')
        //     }
        // }
        // window.addEventListener('scroll', scroll)
        // return () => {
        //     console.log('unmounted')
        //     window.removeEventListener('scroll', scroll)
        // }
    }, [cal])

    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <CountDownBoxRoot id="random-id">
            <ButtonWrap onClick={decrement}>-</ButtonWrap>
            <div>{count}</div>
            <ButtonWrap onClick={increment}>+</ButtonWrap>
        </CountDownBoxRoot>
    )
}


const Box = ({ count }) => {
    return <div> {count}</div>
}

/**
 * Props:
 * 
 * - Giá trị từ C cha truyền vào C con
 * - Không thể thay đổi props
 * - Tạo ra sự đa dạng cho component
 */

/**
 * State
 * - Giữ giá trị trạng thái của C, khi state thay đổi, C re-render
 * - State đc thay đổi qua hàm setState
 * - Khi setState, Neu React thấy giá trị mới sẽ tiên hành re-render
 */


/**
 * useEffect
 * 
 * depenencyList: Gia tri phu thuoc, gia  tri phu thuoc thay doi thi useEffect thu thi lai
 * mounted / unmounted
 * - Lắng nghe sự thay đổi của 1 state, prop
 */