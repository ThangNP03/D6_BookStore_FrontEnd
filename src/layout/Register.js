import React, { useState } from 'react'
import axios from "axios";
import { toast } from "react-hot-toast"
import '../layout/css/Login.css'
import { useNavigate } from 'react-router-dom';
import './css/Register.css'
import Loading from './Loading';

export default function Register() {
    const navigate = useNavigate('');

    const [users, setUsers] = useState(
        {
            username: "",
            fullName: "",
            phoneNumber: "",
            address :"",
            passWord: ""

        }
    )

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUsers({ ...users, [name]: value });

    };


    const [toggle , setToggle] = useState(false);
    const handleRegister = async (e) => {
        setToggle(true)
        e.preventDefault()
        const { fullName, username, passWord, phoneNumber , address} = users
        if (!fullName || !username || !passWord || !phoneNumber || !address) {
            setToggle(false)
            return toast.error("Thông tin không được để trống !!!!")
            
        }
       
        try {
            await axios.post('http://localhost:8080/api/bookStore/auth/signUp', { fullName, username, passWord, phoneNumber, address })
            setToggle(false)
            toast.success("Đăng ký thành công!")
            navigate('/login')

        } catch (error) {
            setToggle(false)
            toast.error(error.response.data)

        }

    }
    return (
        <div className="container mt-5 mb-5">
            <div className="row ">
                <div className="col-md-4 offset-md-4 border rounded p-4 mt-2 shadow ">
                    <h2 className="text-center m-4">Đăng Ký</h2>

                    <form >
                        <div>

                        </div>
                        <div className="mb-3">
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Nhập vào tên đăng nhập"
                                name="username"
                                value={users.username}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="mb-3">
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Nhập họ & tên "
                                name='fullName'
                                value={users.fullName}
                                onChange={handleChange}

                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Nhập vào số điện thoại "
                                name="phoneNumber"
                                value={users.phoneNumber}
                                onChange={handleChange}

                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Số nhà , Quận/Huyện , tỉnh ..."
                                name="address"
                                value={users.address}
                                onChange={handleChange}

                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type={"password"}
                                className="form-control"
                                placeholder="Nhập vào mật khẩu "
                                name="passWord"
                                value={users.passWord}
                                onChange={handleChange}

                            />
                        </div>

                        <div className='text-center'>
                            <button onClick={handleRegister} style={{ fontWeight: '700' }} type="submit" className="btn-login mb-4">
                                Đăng Ký
                            </button>
                        </div>
                        <div className="pb-2">
                            <span>
                                Bạn đã chưa có tài khoản ?
                            </span>
                            <a style={{textDecoration:'none'}} className="mx-2" href='/login'>Đăng nhập </a>
                        </div>
                    </form>
                    {toggle && <Loading/>}
                </div>
            </div>
        </div>
    )
}
