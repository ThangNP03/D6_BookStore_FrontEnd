import axios from 'axios';
import React, { useEffect, useState } from 'react'
import authHeader from '../service/auth-hearder';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './config/config';
import { toast } from 'react-hot-toast';

export default function Profile() {
    const [users, setUser] = useState({
        username: '',
        fullName: '',
        avatar: '',
        address: '',
        phoneNumber: ''
    });
    console.log(users);
    const handleChange = (e) => {
        setUser({ ...users, [e.target.name]: e.target.value });
    };
    const [imageUrl, setImageUrl] = useState("");

    const imagesListRef = ref(storage, "uploads/")
  
    const uploadImage = (e) => {
        
        let imageUpload = e.target.files[0];
        if (imageUpload == null) return;
        const imageRef = ref(storage, `bookStore/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url);
                setUser({ ...users, avatar: url });
                
            });
        });


    };
    const handleSubmit = (id) => {
        console.log(id);

        // Call the API to update the book
        axios.put(`http://localhost:8080/api/bookStore/auth/update/${id}`, users, {
            headers: authHeader()
        })
            .then((response) => {
                toast.success(response.data.message)
            })

            .catch((error) => {
                toast.error(error.response.data);
            });

    }

    const id = sessionStorage.getItem("id");
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
                {
                    users == undefined ? (<></>) : (<>
                        <div className="row">

                            <div className="col-md-3">
                                <div className="text-center">
                                    {/* <img type="file" src={users.avatar} onChange={uploadImage} className="avatar img-circle img-thumbnail" width={300} height={400} alt="avatar" /> */}

                                         {users.avatar ? (
                                            <>
                                                <div className='d-flex' style={{position:'relative'}}>
                                                    <img
                                                        src={users.avatar}
                                                        className="avatar img-circle img-thumbnail"
                                                        width={300}
                                                        height={400}
                                                        alt="avatar"
                                                    />
                                                    <input
                                                        style={{position: 'absolute', height:'300px', opacity:'0'}}
                                                        type="file"
                                                        onChange={uploadImage}
                                                        alt=""
                                                    />
                                                </div>
                                            </>
                                        ) : (<>
                                            <div className='d-flex' style={{position:'relative'}}>
                                                <img
                                                    src="https://st5.depositphotos.com/19428878/63971/v/450/depositphotos_639712656-stock-illustration-add-profile-picture-icon-vector.jpg"
                                                    className="avatar img-circle img-thumbnail"
                                                    width={300}
                                                    height={400}
                                                    alt="avatar"
                                                />
                                                <input
                                                    type="file"
                                                    onChange={uploadImage}
                                                    className="avatar img-circle img-thumbnail"
                                                    style={{position: 'absolute', height:'300px', opacity:'0'}}
                                                    alt=""
                                                />
                                            </div>
                                        </>

                                        )} 
                                    <h4>{users.fullName} </h4>

                                </div>
                            </div>

                            <div className="col-md-9 personal-info">
                                <h3>Personal info</h3>
                                <form className="form-horizontal" role="form">
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Tên tài khoản :</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" onChange={handleChange} name='username' type="text" value={users.username} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Tên đầy đủ :</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" onChange={handleChange} name='fullName' type="text" value={users.fullName} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Số điện thoại:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" onChange={handleChange} name='phoneNumber' type="text" value={users.phoneNumber} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Địa chỉ :</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" onChange={handleChange} name='address' type="text" value={users.address} />
                                        </div>
                                    </div>
                                    <button className='mt-5 btn btn-warning' onClick={(e) => handleSubmit(users.userId, e.preventDefault())}>Lưu  thông tin</button>
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
