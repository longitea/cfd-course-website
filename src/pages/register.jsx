import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Input from '../components/Input'
import Select from '../components/Select'
import { useQuery } from '../hooks/useQuery'
import courseService from '../services/course'
import { Skeleton } from '@mui/material'



export default function Register() {
    const [value, setValue] = useState({})
    const [error, setError] = useState({})
    // const [course, setCourse] = useState({})
    const { id } = useParams()

    const { data: course, isLoading } = useQuery(() => courseService.getDetail(id), [id])


    // useEffect(() => {
    //     courseService.getDetail(id)
    //         .then(res => {
    //             setCourse(res.data)
    //         })
    //     window.scroll({
    //         top: 0
    //     })
    // }, [])



    const onSubmit = (ev) => {
        ev.preventDefault();
        const errorObj = {}
        if (!value?.name?.trim()) {
            errorObj.name = 'Họ và tên không được để trống'
        }

        if (!value?.phone?.trim()) {
            errorObj.phone = 'Số điện thoại không được để trống'
        } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(value.phone)) {
            errorObj.phone = 'Số điện không đúng định dạng'
        }


        if (!value?.email?.trim()) {
            errorObj.email = 'Email không được để trống'
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.email)) {
            errorObj.email = 'Email không đúng định dạng'
        }

        if (!value?.fb?.trim()) {
            errorObj.fb = 'Facebook url không được để trống'
        } else if (!/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(value.fb)) {
            errorObj.fb = 'Facebook url không đúng định dạng'
        }

        if (!value?.payment) {
            errorObj.payment = 'Xin vui lòng chọn hình thức thanh toán'
        }
        setError(errorObj)

        if (Object.keys(errorObj).length === 0) {
            alert('Validate thanh cong')
        }
    }


    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">
                            {isLoading ? <Skeleton height={50.5} /> : course.title}
                        </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <form className="form" onSubmit={onSubmit}>
                            <Input
                                required
                                label="Họ và tên"
                                placeholder="Họ và tên bạn"
                                onChange={ev => value.name = ev.target.value}
                                error={error.name}
                            />
                            {/* <label>
                                <p>Họ và tên<span>*</span></p>
                                <div className="input-group"style={{width: '100%'}} >
                                    <input style={{width: '100%'}} onChange={ev => value.name = ev.target.value} type="text" placeholder="Họ và tên bạn" />
                                    {error.name && <ErrorMessage>{error.name}</ErrorMessage>}
                                </div>
                            </label> */}
                            <Input
                                required
                                label="Số điện thoại"
                                placeholder="Số điện thoại"
                                onChange={ev => value.phone = ev.target.value}
                                error={error.phone}
                            />
                            {/* <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input onChange={ev => value.phone = ev.target.value} type="text" placeholder="Số điện thoại" />
                            </label> */}
                            <Input
                                required
                                label="Email"
                                placeholder="example@gmail.com"
                                onChange={ev => value.email = ev.target.value}
                                error={error.email}
                            />
                            {/* <label>
                                <p>Email<span>*</span></p>
                                <input onChange={ev => value.email = ev.target.value} type="text" placeholder="Email của bạn" />
                            </label> */}
                            <Input
                                required
                                label="URL Facebook"
                                placeholder="https://facebook.com"
                                onChange={ev => value.fb = ev.target.value}
                                error={error.fb}
                            />
                            {/* <label>
                                <p>URL Facebook<span>*</span></p>
                                <input onChange={ev => value.fb = ev.target.value} type="text" placeholder="https://facebook.com" />
                            </label> */}
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <Select
                                label="Hình thức thanh toán"
                                placeholder="--Hình thức thanh toán--"
                                error={error.payment}
                                options={[
                                    'Chuyển khoản',
                                    'Thanh toán tiền mặt',
                                    'Momo'
                                ]}
                                onChange={(val) => value.payment = val}
                            />
                            {/* <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label> */}
                            <Input
                                onChange={ev => value.note = ev.target.value}
                                label="Ý kiến cá nhân"
                                placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                            />
                            {/* <label>
                                <p>Ý kiến cá nhân</p>
                                <input onChange={} type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                            </label> */}
                            <button type="submit" className="btn main rect">đăng ký</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>

    )
}
