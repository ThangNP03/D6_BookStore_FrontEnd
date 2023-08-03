import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import authHeader from '../service/auth-hearder';
import { Link, useNavigate } from 'react-router-dom';

export default function ChangePassWord() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const handleChangePassword = (e) => {
        e.preventDefault();

        const changePasswordRequest = {
            currentPassword,
            newPassword,
        };

        axios.put('http://localhost:8080/api/bookStore/auth/changePassword', changePasswordRequest, { headers: authHeader() })
            .then(res => {
        
                    toast.success("Đổi mật khẩu thành công !!!!");
                    navigate('/profile')
                    console.log(res);

            })
            .catch(error => {
               
                toast.error(error.response.data.message);
                // toast.error("Thông tin khồn được để trống");
                // console.error(error);
            });
    };

    return (
        <div className='pt-5' style={{ backgroundColor: 'rgb(240, 240, 238)', borderRadius: '6px' }}>
            <div className='container' style={{ backgroundColor: "#fff", height: '400px' }}>

                <div style={{ paddingTop: '90px' }}>
                    <Link to={'/profile'}>Trở lại trang cá nhân</Link>
                    <form className='shadow p-3 '
                        style={{
                            width: '40%', margin: '0 auto',
                            border: '1px solid #3333', borderRadius: '6px'
                        }}
                        onSubmit={handleChangePassword} >

                        <h3 style={{ color: 'red' }}>Thay đổi mật khẩu của bạn </h3>
                        <div>
                            <label>Mật khẩu cũ</label>
                            <input type="passWord" placeholder='Nhập vào mật khẩu cũ .....'
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Mật khẩu mới</label>
                            <input type="passWord" placeholder='Nhập vào mật khẩu mới .....'
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <button className='btn btn-warning mt-2' type="submit">Thay đổi mật khẩu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
