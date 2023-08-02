import React, { useEffect, useState } from 'react'
import "./css/History.css"
// import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import authHeader from '../service/auth-hearder';
import { toast } from 'react-hot-toast';




export default function History() {
    const [book, setBooks] = useState();

    const id = sessionStorage.getItem("id");
    console.log(id);
    useEffect(() => {
        async function fetchData() {
            await fetch()
        }
        fetchData()
    }, []);

    const fetch = async () => {
        await axios.get(`http://localhost:8080/api/bookStore/cart/findUserID/${id}`, {
            headers: authHeader(),
        })
            .then((response) => {
                console.log(response.data);
                setBooks(response.data);

            })
            .catch((error) => {
                console.error(error);
            });
    }

    // Hủy mươn sách
    const handleCancelBook = async (id) => {
        console.log(id);
        try {
            const response = await axios.patch(`http://localhost:8080/api/bookStore/cart/author-cancel/${id}`, {},
                { headers: authHeader() }).then((res) => {
                    console.log("data", res.data);
                    window.location.reload()
                    fetch()
                }
                )
            console.log(response);
            toast.success("Bạn đã hủy mượn sách !!!")
        } catch (error) {
            console.error(error);
        }
    }
    // Hủy mước sách

    // Trả sách
    const handleReturnBook = async (id) => {
        console.log(id);
        try {
            const response = await axios.patch(`http://localhost:8080/api/bookStore/cart/returnBooks/${id}`, {},
                { headers: authHeader() }).then((res) => {
                    console.log("data", res.data);
                    window.location.reload()
                    fetch()
                }
                )
            console.log(response);
            toast.success("Bạn đã trả sách  !!!")
        } catch (error) {
            console.error(error);
        }
    }
    //Trả sách

    // Muợn lại sách
    const handleReplay = async (id) => {
        console.log(id);
        try {
            const response = await axios.patch(`http://localhost:8080/api/bookStore/cart/replay/${id}`, {},
                { headers: authHeader() }).then((res) => {
                    console.log("data", res.data);
                    window.location.reload()
                    fetch()
                }
                )
            console.log(response);
            toast.success("Bạn đã trả sách  !!!")
        } catch (error) {
            console.error(error);
        }
    }
    //Mượn lại sách

    const [active, setActive] = useState();
    const [listRender, setListRender] = useState();
    const handleChangeList = (e) => {
        let check = e.target.id;
        setActive(check);
        if (e.target.id == "all") {
            setListRender(book);
        } else {
            const element = book.filter((h) => h.status == e.target.id);
            setListRender(element);
        }
    };
    let renderList = [];
    let renderListHome = [];
    if (listRender == undefined) {
        renderList = book;

        console.log("renderList", renderList);
    } else if (listRender.length > 0) {
        renderList = listRender;
        renderListHome = renderList.map((e, index) => {
            return (
                <form className=''>
                    <>
                        <hr className="my-4 " />
                        <div className="row mb-4 d-flex justify-content-between align-items-center mt-5">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                                <img src={e.bookId.image} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">{e.bookId.bookName}</h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <h6 className='mx-4'>Số lượng  : </h6>
                                <h5 className=""> {e.quantity}</h5>
                            </div>
                            {e.status == "Borrowed" ? <>
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                    <h6>Mượn lúc : </h6>
                                    <h6 style={{ fontSize: '16px' }}>{e.borrowAt}</h6>
                                </div>
                            </> : e.status == "Return" ? <>
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                    <h6>Trả lúc : </h6>
                                    <h6 style={{ fontSize: '16px' }}>{e.returnAt}</h6>
                                </div>
                            </> : <></>}
                            <div className="col-md-2 col-lg-2 col-xl-2 text-start ">
                                {e.status == "Borrowed" ? <>
                                    <h6 style={{ fontSize: '16px', color: 'green' }}>
                                        <span> Đang mượn sách </span>
                                        <span className='mx-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                            </svg>
                                        </span>
                                    </h6>
                                </> : e.status == "Loading" ? <>
                                    <h6 style={{ fontSize: '16px', }}>
                                        <span> Chờ xác nhận </span>
                                        <span className='mx-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
                                                <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                                            </svg>
                                        </span>
                                    </h6>
                                </> : e.status == "Return" ? <>
                                    <h6 style={{ fontSize: '16px', color: '#ff9902' }}>
                                        <span> Đã trả sách </span>
                                        <span className='mx-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
                                            </svg>
                                        </span>
                                    </h6>
                                </> : e.status == "Cancel" ? <>
                                    <h6 style={{ fontSize: '16px', color: 'red' }}>
                                        <span> Yêu cầu bị hủy </span>
                                        <span className='mx-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon" viewBox="0 0 16 16">
                                                <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </span>
                                    </h6>
                                </> : <></>}
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 text-center">
                                {e.status == "Loading" || e.status == "" ? <>
                                    <button className='btn btn-danger mx-2 my-2'
                                        onClick={(b) => handleCancelBook(

                                            e.id,
                                            b.preventDefault())}
                                    >Hủy Mượn </button>
                                </> : <></>}
                                {e.status == "Cancel" ? <> <button className='btn btn-primary' onClick={(b)=>handleReplay(e.id, b.preventDefault())}>Mượn lại </button></> : <></>}
                            </div>

                        </div >
                    </>
                    <hr className="my-4" />

                    {e.status == "Borrowed" ? <>
                        <div className='text-end mb-3' style={{paddingRight:'20px'}}>
                            <button className='btn btn-warning' type='button' onClick={() => handleReturnBook(
                                e.id
                            )}>
                                <span className='mx-2'> Trả sách </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </> : <></>}
                </form>

            );
        });
    }



    return (

        <div style={{ backgroundColor: 'rgb(240, 240, 238)' }}>
            <section className="h-100 h-custom " >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div className="card card-registration card-registration-2" style={{ borderRadius: 15 }}>
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-12">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>

                                                    <h6 className="mb-0 text-muted">3 items</h6>
                                                </div>
                                                <div className='' >
                                                    <span className=''>
                                                        <button
                                                            data-filter="*"
                                                            id="all"
                                                            onClick={handleChangeList}
                                                            className={active == "all" ? "active" : "btn-2"}
                                                        >
                                                            Tất cả
                                                        </button>
                                                    </span>
                                                    <span className='mx-3'>
                                                        <button

                                                            data-filter=".Loading"
                                                            id="Loading"
                                                            onClick={handleChangeList}
                                                            className={active == "Loading" ? "active-loading" : "btn-2"}
                                                        >
                                                            Chờ xác nhận
                                                        </button>
                                                    </span>
                                                    <span>
                                                        <button
                                                            data-filter=".Borrowed"
                                                            id="Borrowed"
                                                            onClick={handleChangeList}
                                                            className={active == "Borrowed" ? "active" : "btn-2"}
                                                        >
                                                            Đang mượn
                                                        </button>
                                                    </span>
                                                    <span className='mx-3'>
                                                        <button
                                                            data-filter=".Return"
                                                            id="Return"
                                                            onClick={handleChangeList}
                                                            className={active == "Return" ? "active" : "btn-2"}
                                                        >
                                                            Đã trả
                                                        </button>
                                                    </span>
                                                    <span>
                                                        <button
                                                            data-filter=".Cancel"
                                                            id="Cancel"
                                                            onClick={handleChangeList}
                                                            className={active == "Cancel" ? "active" : "btn-2"}
                                                        >
                                                            Hủy yêu cầu
                                                        </button></span>
                                                </div>
                                            </div>
                                            <form >{renderListHome}</form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </div>

    )
}

