import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"

import FacebookLogin from 'react-facebook-login';

export default function Login() {
  const [username, setUsername] = useState('');
  const [passWord, setPassWord] = useState('');

  const navigate = useNavigate();

  const responseFacebook = (response) => {

    if (response.error) {
      toast.error(response.error.message)
    } else {
      navigate('/')
      toast('Xin Chào ' + response.name, {
        icon: '👏',
      });
    }
    console.log(response);
  }




  const ProcLogin = async (event) => {
    event.preventDefault();

    try {
      const permissionList = ['ADMIN', 'PM', 'USER'];

      const response = await axios.post(

        "http://localhost:8080/api/bookStore/auth/signIn",
        { username, passWord },
        {
          headers: {
            Authorization: 'Bearer ',
          },
        }
      ).then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          if (permissionList[2] == response.data.listRoles[0].authority) {
            sessionStorage.setItem('username', username)
         
            sessionStorage.setItem('token', response.data.token)
          
              toast('Xin Chào ' + response.data.fullName, {
                icon: '👏',
              });
              navigate('/')
          
          
          }
        }
      });

     
     
      if (permissionList[0] == response.data.listRoles[0].authority) {
        navigate('/')
        toast('Xin Chào ' + response.data.fullName, {
          icon: '👏',
        });
      }


    } catch (error) {
      console.error(error);
      // toast.error(error.response.data);
    }

  };



  return (
    <div className="container mt-5 mb-5">
      <div className="row ">
        <div className="col-md-4 offset-md-4 border rounded p-4 mt-2 shadow ">
          <h2 className="text-center m-4">Đăng nhập</h2>

          <form className='' onSubmit={ProcLogin}>

            <div className="mb-3">
              <input
                type={"text"}
                className="form-control"
                placeholder="Nhập vào tên đăng nhập"

                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                }}

              />

            </div>

            <div className="mb-3">
              <input
                type={"password"}
                className="form-control"
                placeholder="Nhập vào mật khẩu "

                value={passWord}
                onChange={(e) => {
                  setPassWord(e.target.value)
                }}

              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn-login">
                Đăng nhập
              </button>
              <FacebookLogin
                className='button-face'
                appId="843734363846322"
                autoLoad={true}
                fields="name,email,picture"
                // onClick={componentClicked}
                callback={responseFacebook} />
            </div>
            <div>
              <a href='/'>Trở lại trang chủ</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
