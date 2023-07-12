import React, { useState } from 'react'

export default function Login() {


  return (
    <div className="container">
            <div className="row ">
                <div className="col-md-4 offset-md-4 border rounded p-4 mt-2 shadow ">
                    <h2 className="text-center m-4">Đăng nhập</h2>

                    <form >
                        <div>

                        </div>
                        <div className="mb-3">
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Nhập vào tên đăng nhập"
                                name="username"
                            />

                        </div>

                        <div className="mb-3">
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Nhập vào mật khẩu "
                                name="passWord"

                            />
                        </div>

                        <button type="submit" className="btn-login">
                            Đăng nhập
                        </button>
                        <button type="submit" className="btn-face mt-2 mb-4">
                            <svg className='mx-2 icons-face' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                            Đăng nhập bằng FaceBook
                        </button>
                      <div>
                        <a href='/'>Trở lại trang chủ</a>
                      </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

