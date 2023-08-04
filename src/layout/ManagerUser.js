import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './css/BookManager.css'
import Loading from './Loading';
export default function ManagerUser() {
  const avatarDefault = sessionStorage.getItem('avatar')
  const [users, setUser] = useState([]);
  const [toggle , setToggle] = useState(false);
  useEffect(() => {
    setToggle(true)
    axios.get('http://localhost:8080/api/bookStore/auth/getAll')
      .then((response) => {
    
        setUser(response.data);
        setToggle(false)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className=''>
      <div className='container pt-5 grid-container mt-4' >
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Ảnh đại diện</th>
              <th scope="col">Tên tài khoản</th>
              <th scope="col">Tên đầy đủ</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Đại chỉ</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user) => (
              <tr key={user.userId}>
              <td>{user.avatar == "" ? <><img src="https://st5.depositphotos.com/19428878/63971/v/450/depositphotos_639712656-stock-illustration-add-profile-picture-icon-vector.jpg" alt="" height={100} width={100} /></> : <><img src={user.avatar} alt="" height={100} width={100} /></>}</td>
              <td>{user.username}</td>
              <td>{user.fullName}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.address}</td>
              <td>
                  <button className='btn btn-success mx-2'>Active</button>
                  <button className='btn btn-danger'>Block</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
          {toggle && <Loading/>}
    </div>
  )
}
