import axios from 'axios';
import React, { useEffect, useState } from 'react'
import authHeader from '../service/auth-hearder';

export default function Profile() {
    const [users, setUser] = useState();
    console.log("user", users);
    const id = sessionStorage.getItem("id");
    console.log("id===>", id);
    useEffect(() => {
        async function fetchData() {
            await fetch()
        }
        fetchData()
    }, []);

    const fetch = async () => {
        await axios.get(`http://localhost:8080/api/bookStore/auth/user/${id}`, {
            headers: authHeader(),
        })
            .then((response) => {
                console.log(response.data);
                setUser(response.data);

            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div style={{ backgroundColor: '#f0f0f0' }}>
            <div className="container bootstrap snippets bootdey pt-5 pb-3">
                <hr />

                {/* <div className="row">

                    <div className="col-md-3">
                        <div className="text-center">
                            <img src="https://i.pinimg.com/564x/3a/32/a4/3a32a45d26021cb1d3b0d2930ff3fb36.jpg" className="avatar img-circle img-thumbnail" width={200} height={200} alt="avatar" />
                            <h6>{e.username} </h6>
                            <input type="file" />
                        </div>
                    </div>

                    <div className="col-md-9 personal-info">
                        <h3>Personal info</h3>
                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Tên tài khoản :</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" defaultValue={users.username} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Tên đầy đủ :</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" defaultValue="bootdey" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Số điện thoại:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" defaultValue />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Địa chỉ :</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" defaultValue="janesemail@gmail.com" />
                                </div>
                            </div>
                            <button className='mt-5 btn btn-warning'>Chỉnh sửa thông tin</button>
                        </form>
                    </div>
                </div> */}
                {
                users == undefined ? (<></>) : (<>
                        <div className="row">

<div className="col-md-3">
    <div className="text-center">
        <img src="https://i.pinimg.com/564x/3a/32/a4/3a32a45d26021cb1d3b0d2930ff3fb36.jpg" className="avatar img-circle img-thumbnail" width={200} height={200} alt="avatar" />
        <h4>{users.fullName} </h4>
        <input type="file" />
    </div>
</div>

<div className="col-md-9 personal-info">
    <h3>Personal info</h3>
    <form className="form-horizontal" role="form">
        <div className="form-group">
            <label className="col-lg-3 control-label">Tên tài khoản :</label>
            <div className="col-lg-8">
                <input className="form-control" type="text" defaultValue={users.username} />
            </div>
        </div>
        <div className="form-group">
            <label className="col-lg-3 control-label">Tên đầy đủ :</label>
            <div className="col-lg-8">
                <input className="form-control" type="text" defaultValue={users.fullName}/>
            </div>
        </div>
        <div className="form-group">
            <label className="col-lg-3 control-label">Số điện thoại:</label>
            <div className="col-lg-8">
                <input className="form-control" type="text" defaultValue={users.phoneNumber} />
            </div>
        </div>
        <div className="form-group">
            <label className="col-lg-3 control-label">Địa chỉ :</label>
            <div className="col-lg-8">
                <input className="form-control" type="text" defaultValue={users.address} />
            </div>
        </div>
        <button className='mt-5 btn btn-warning'>Lưu  thông tin</button>
    </form>
</div>
</div>
                </>)
                }

                 
         
                <hr />
            </div>

        </div>

    )
}
