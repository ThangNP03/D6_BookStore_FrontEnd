import React, { useState } from 'react'
import axios from "axios";
import { toast } from "react-hot-toast"
import '../layout/css/Login.css'


export default function Register() {

    const [users, setUsers] = useState(
        {
            username: "",
            fullName: "",
            phoneNumber: "",
            passWord: ""

        }
    )

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUsers({ ...users, [name]: value });

    };

 

    const handleRegister = async (e) => {
        e.preventDefault()
        const {fullName, username, passWord, phoneNumber} = users
        if (!fullName || !username || !passWord || !phoneNumber) {
            return toast.error("Thông tin không được để trống")
        }
        try {
            await axios.post('http://localhost:8080/api/bookStore/auth/signUp', { fullName, username, passWord, phoneNumber })
            toast.success("Đăng ký thành công!")
            console.log("======>", users);
          
          
        } catch (error) {
            toast.error("Tài khoản hoặc mật khẩu không chính xác" )
            console.log(error);
        }

    }
    return (
        <div className="container">
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
                                type={"password"}
                                className="form-control"
                                placeholder="Nhập vào mật khẩu "
                                name="passWord"
                                value={users.passWord}
                                onChange={handleChange}

                            />
                        </div>

                        <button onClick={handleRegister} type="submit" className="btn-login mb-4">
                            Đăng Ký
                        </button>
                        <div>
                            Bằng việc đăng ký, bạn  đồng ý với BookStore.com về <br />
                            <a href="">Điều khoản dịch vụ </a>
                            &
                            <a href=""> Điều khoản dịch vụ</a>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
