import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../layout/css/Navbar.css'

export default function Navbar() {
    const name = sessionStorage.getItem('username');

    const navigate = useNavigate('');
    const handleLogout = () => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('fullName');
        navigate('/login')
    }
    let element = "";
    if (name) {
        element = <>
            <p>{name}</p>
        </>
    }
    console.log(name);

    return (
        <div>
            <>
                <nav className="navbar navbar-expand-lg shadow  container-fluid">

                    <div className="container">
                        <Link className="navbar-brand d-flex" style={{ alignItems: 'center' }} to="/">
                            <h1 className='mx-4' style={{ color: 'red' }}>BookStore</h1>
                            <a href="" style={{ color: '#333333' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
                                    <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z" />
                                </svg>
                            </a>
                        </Link>
                        <form className='d-flex '>
                            <div className='flex-grow-1'>
                                <input type="text" className='input-search' />
                            </div>
                            <button className='mx-2 btn btn-outline-danger d-flex ' style={{ alignItems: 'center' }} >
                                <svg className='position-relative' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </form>
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
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <a href="" style={{ color: '#333333', gap: '25px', display: 'inline-block' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                        </svg>
                                    </a>
                                    <a href="" className='ms-4' style={{ color: '#333333', display: 'inline-block' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                    </a>
                                </div>
                                <span type="button"
                                    className="dropdown-toggle d-flex"
                                    style={{alignItems:'center'}}
                                    data-bs-toggle="dropdown" aria-expanded="false" >
                                    <h6 className='mx-2' style={{display:'flex', alignItems: 'center'}}> {element}</h6>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                </span>
                                <ul className="dropdown-menu" >
                                    {name ? <>


                                        <li>
                                            <Link class="dropdown-item " to="/login">
                                                Profile

                                            </Link></li>
                                        <li>
                                            <a onClick={handleLogout} class="dropdown-item ">

                                                Logout
                                            </a>
                                        </li>


                                    </> : <>

                                        <li>
                                            <Link class="dropdown-item " to="/login">
                                                Đăng Nhập
                                            </Link></li>
                                        <li>
                                            <Link class="dropdown-item " to="/register">

                                                Đăng ký
                                            </Link>
                                        </li>


                                    </>}
                                    {/* <li>
                                        <Link class="dropdown-item " to="/login">
                                            Đăng nhập

                                        </Link></li>
                                    <li>
                                        <Link class="dropdown-item " to="/register">

                                            Đăng ký
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        </div>
    )
}
