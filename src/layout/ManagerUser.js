import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './css/BookManager.css'
export default function ManagerUser() {
  const [users, setUser] = useState([]);
  console.log("usser",users);
  useEffect(() => {
    axios.get('http://localhost:8080/api/bookStore/auth/getAll')
      .then((response) => {
        setUser(response.data);
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
              <td><img src="https://i.pinimg.com/564x/3a/32/a4/3a32a45d26021cb1d3b0d2930ff3fb36.jpg" height={100} alt="anhloi" /></td>
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

    </div>
  )
}
