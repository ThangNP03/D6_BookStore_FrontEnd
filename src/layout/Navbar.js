import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../layout/css/Navbar.css'
import axios from 'axios';

export default function Navbar() {
    const name = sessionStorage.getItem('username');
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
                    <Link className='text-navbar' to={'/bookManager'}>
                        <span >
                            <svg style={{ color: 'red' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
                                <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                                <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                            </svg>
                        </span>
                        <span className='mx-3'>
                            Quản lí sách
                        </span>
                    </Link>
                </a>
            </>
        }
    }
    let element = "";
    if (name) {
        element = <>
            <em style={{ fontSize: '18px', fontWeight: '600' }}>{name}</em>
        </>
    }
    console.log(name);
    return (
        <div className=''>
            <>
                <nav className="navbar navbar-expand-lg shadow  container-fluid navbar-book">

                    <div className="container nav-ul">
                        <Link className="navbar-brand d-flex " style={{ alignItems: 'center' , color:'red',justifyContent:'center'}} to="/">
                            <h1 className='mx-2'>
                                BookStore    
                            </h1>                
                        </Link>
                        <div   >
                            <ul className='d-flex mt-3' style={{ gap: '30px' }}>

                                <Link className='navbar-text' to={'/'}>HOME</Link>
                                <Link className='navbar-text' to={'/'}>HOME</Link>
                                <Link className='navbar-text' to={'/'}>HOME</Link>
                                <Link className='navbar-text' to={'/'}>HOME</Link>

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

                            {/* Example single danger button */}
                            <div className="btn-group" style={{ gap: '25px' }}>
                                <div>

                                    <ul className="menu" >
                                        {name ? <>
                                            <span >
                                                <a className='navbar-text' href="" style={{ color: '#333333', gap: '25px', display: 'inline-block' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                                    </svg>
                                                </a>
                                                <Link to={'/cart'} href="" className='mx-4 navbar-text' style={{ color: '#333333', display: 'inline-block' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                    </svg>
                                                </Link>
                                            </span>
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

                                                    <a href="#" className='avt-a'>
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

                                                            <span className='mx-4' style={{ color: 'red' }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                                                    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                                                </svg>
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
                                        <span >
                                                <a className='navbar-text' href="" style={{ color: '#333333', gap: '25px', display: 'inline-block' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                                    </svg>
                                                </a>
                                                <a to={'/cart'} href="" className='mx-2 navbar-text' style={{ color: '#333333', display: 'inline-block' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                    </svg>
                                                </a>
                                            </span>
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
