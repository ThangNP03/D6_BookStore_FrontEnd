import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../layout/css/Navbar.css'
import axios from 'axios';
import authHeader from '../service/auth-hearder';

export default function Navbar() {
    const name = sessionStorage.getItem('fullName');
    const role = JSON.parse(sessionStorage.getItem('roles'))
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();

    }
    let elementCheckRoles = ""
    if (role == null) {
        elementCheckRoles = ""
    } else {
        if (role[0].authority == "ADMIN") {
            elementCheckRoles = <>

                <a href="#">
                    <Link className='text-navbar' to={'/admin'}>
                        <span >
                            <svg style={{ color: 'red' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
                                <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                                <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                            </svg>
                        </span>
                        <span className='mx-3'>
                            Quản lý 
                        </span>
                    </Link>
                </a>
            </>
        }
    }
    let element = "";
    if (name) {
        element = <>
            <em style={{ fontSize: '16px', fontWeight: '600' }}>{name}</em>
        </>
    }
    console.log(name);
    return (
        <div className=''>
            <>
                <nav className="navbar navbar-expand-lg shadow  container-fluid  navbar-book">
                    <div className="container nav-ul">
                        <Link className="navbar-brand d-flex " style={{ alignItems: 'center', color: 'red', justifyContent: 'center' }} to="/">
                            <h1 className='mx-2'>
                            LibraryBook
                            </h1>
                        </Link>
                        <div   >
                            <ul className='d-flex mt-3' style={{ gap: '30px' }}>
                                {name ?
                                    <>
                                        <Link className='navbar-text' to={'/'}>Trang Chủ </Link>
                                        <Link className='navbar-text' to={'/listBook'}>Sản Phẩm</Link>
                                        <Link className='navbar-text' to={'/cart'}>Giỏ hàng</Link>
                                        <Link className='navbar-text' to={'/history'}>Lịch Sử</Link>
                                    </> :
                                    <>
                                        <Link className='navbar-text' to={'/'}>Trang Chủ </Link>
                                        <Link className='navbar-text' to={'/listBook'}>Sản Phẩm</Link>
                                    </>}
                            </ul>
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>


                        </button>


                        <div>
                            <div className="btn-group" style={{ gap: '25px' }}>
                                <div>

                                    <ul className="menu" >
                                        {name ? <>

                                            <div class="dropdown ">

                                                <span class="dropbtn ">
                                                    <span href="" className='mt-3' style={{ color: '#333333', display: 'inline-block' }}>
                                                        {element}
                                                        <a href="" className='mx-2' style={{ color: '#333333', display: 'inline-block' }}>  <img src="https://img.hoidap247.com/picture/answer/20200629/large_1593440826364.jpg"
                                                            width={'30px'}
                                                            height={'30px'}
                                                            style={{ borderRadius: '50px' }} alt="ảnh*" /></a>
                                                    </span>
                                                </span>
                                                <div class="dropdown-content">
                                                    <a href="#" className='avt-a' >
                                                        <Link className="d-flex  text-navbar" to={'/profile'}>
                                                            <span>
                                                                <img src="https://img.hoidap247.com/picture/answer/20200629/large_1593440826364.jpg"
                                                                    width={'30px'}
                                                                    height={'30px'}
                                                                    style={{ borderRadius: '50px' }} alt="ảnh*" />
                                                            </span>
                                                            <span className='mx-3 ' style={{ color: 'red' }}>
                                                                {element}
                                                                
                                                            </span>
                                                               
                                                        </Link>
                                                    </a>
                                                    {elementCheckRoles}
                                                    <a href="#">
                                                        <Link className='text-navbar' to={'/cart'}>
                                                            <span style={{ color: 'red' }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                                </svg>
                                                            </span>
                                                            <span className='mx-3'>
                                                                Giỏ hàng
                                                            </span>
                                                        </Link>
                                                    </a>
                                                    <a href="#">
                                                        <Link className='text-navbar' to={'/history'}>
                                                            <span style={{ color: 'red' }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                                                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                                                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                                                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                                                </svg>
                                                            </span>
                                                            <span className='mx-3'>
                                                                Lịch sử mượn sách
                                                            </span>
                                                        </Link>
                                                    </a>
                                                    <a href="#">
                                                        <Link onClick={handleLogout} to={'/login'} className='text-navbar'>
                                                            <span style={{ color: 'red' }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                                                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                                                </svg>
                                                            </span>
                                                            <span className='mx-3'>
                                                                Đăng xuất
                                                            </span>
                                                        </Link>
                                                    </a>
                                                </div>

                                            </div>
                                        </> : <>

                                            <div class="dropdown login-register">
                                                <div class="dropbtn ">
                                                    <span href="" className='mt-3' style={{ color: '#333333', display: 'inline-block' }}>
                                                        <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                                        </svg>

                                                    </span>
                                                    <span className='mx-2'> Tài khoản</span>
                                                </div>
                                                <div class="dropdown-content" >
                                                    <a href="#">
                                                        <Link className='login' to={'/login'}>
                                                            Đăng nhập
                                                        </Link>
                                                    </a>
                                                    <a href="#">
                                                        <Link className='register' to={'/register'}>
                                                            Đăng ký
                                                        </Link>
                                                    </a>
                                                    <a href="#">
                                                        <Link className='facebook' >
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                                </svg>
                                                            </span>
                                                            <span>  facebook</span>
                                                        </Link>
                                                    </a>

                                                </div>
                                            </div>
                                        </>}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        </div>
    )
}
