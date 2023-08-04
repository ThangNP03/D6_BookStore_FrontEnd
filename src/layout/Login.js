import axios from "axios";
import React, { useState } from "react";

import { json, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"

import FacebookLogin from 'react-facebook-login';
import Loading from "./Loading";

export default function Login() {
  const [username, setUsername] = useState('');
  const [passWord, setPassWord] = useState('');
  const [fullName, setFulName] = useState('');
  const [toggle , setToggle] = useState(false);


  const navigate = useNavigate();






  const ProcLogin = async (event) => {
    setToggle(true)
    event.preventDefault();
    
    try {
      const response = await axios.post(

        "http://localhost:8080/api/bookStore/auth/signIn",
        { username, passWord },
        {
          headers: {
            Authorization: 'Bearer ',
          },
        }
      )
      if (username === "" || passWord === "") {
        toast.error("Thông tin không được để trống")
      } else {
       
        sessionStorage.setItem('token', response.data.token)
        sessionStorage.setItem('fullName', response.data.fullName)
        sessionStorage.setItem('roles', JSON.stringify(response.data.listRoles))
        sessionStorage.setItem('id', response.data.userId)
        console.log(response.data);
        if( response.data.avatar ==  null){
         
          sessionStorage.setItem('avatar', 'https://firebasestorage.googleapis.com/v0/b/npthangcom.appspot.com/o/bookStore%2Favatar.jpg?alt=media&token=4b55105e-2e5a-46e3-b2ce-15050b67c972')
          console.log("1", response.data.avatar);
        }else{
          sessionStorage.setItem('avatar', response.data.avatar)
          console.log("2", response.data.avatar);
        }
       
        
        const role = JSON.parse(sessionStorage.getItem('roles'))
        if (role[0].authority == "ADMIN"){
          setToggle(false)
          toast('Xin Chào ' + response.data.fullName, {
            icon: '👏',
          })
          navigate('/admin')
        }else{
          setToggle(false)
          toast('Xin Chào ' + response.data.fullName, {
            icon: '👏',
          })
          navigate('/')
        }
       
      
      
      }
      console.log("id",response.data.id);

    } catch (error) {

      console.error(error);
      setToggle(false)
      toast.error(error.response.data);
    
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
              <button type="submit" className="btn-login-login">
                Đăng nhập
              </button>
              <button className="btn-face mt-2"> Đăng nhập bằng Facebook</button>
            </div>
            <div className="pt-3">
              <span>
                Bạn đã chưa có tài khoản ? 
              </span>
              <a style={{textDecoration:'none'}} className="mx-2" href='/register'>Đăng ký ở đây</a>
            </div>
          </form>
        </div>
      </div>
      {toggle && <Loading />}
    </div>
  )
}
