import React from 'react'
import { Link } from "react-router-dom";
import Login from './Login';

export default function Navbar() {
    return (
        <div>
            <>
                <nav className="navbar navbar-expand-lg shadow fixed">

                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <h1 style={{ color: 'red' }}>BookStore</h1>
                        </Link>
                        <form className='d-flex '>
                            <input type="text" />
                           <button className='mx-2 btn btn-outline-danger ' >
                           <svg  className='position-relative' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
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
                        <Link className="btn btn-outline-dark mx-2" to="/bookManager">
                                Quanr lys sách
                            </Link>
                        <div>

                            <Link className="btn btn-outline-dark" to="/register">
                                Đăng ký
                            </Link>
                            <Link className="btn btn-outline-dark mx-2" to="/login">
                                Đăng nhập
                            </Link>
                        </div>
                    </div>
                </nav>
            </>
        </div>
    )
}
