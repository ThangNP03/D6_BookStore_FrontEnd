import React, { useEffect, useState } from 'react'
import "./css/Cart.css"
import axios from 'axios';
import authHeader from '../service/auth-hearder';
import { toast } from 'react-hot-toast';

export default function Cart() {
  const [book, setBooks] = useState();
  const userID = sessionStorage.getItem("id");



  useEffect(() => {
    async function fetchData() {
      await fetch()
    }
    fetchData()
  }, []);

  const fetch = async () => {
    await axios.get(`http://localhost:8080/api/bookStore/cart/findUserID/${userID}`, {
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


  const handleCart = (id) => {
    let cart = {
      bookId: id
    }
    console.log("cartId", cart);
    axios.post(`http://localhost:8080/api/bookStore/cart/addBook`, cart,
      {
        headers: authHeader(),
      }

    )
      .then((response) => {

        if (response.data.message == "postMessage") {
          toast.error("Số lượng  yêu cầu cho không có sẵn !!!")
        }
        fetch();
      })
      .catch((error) => {
        console.error(error);
      });

  }

  const handleDeleteQuantity = (id) => {
    let cart = {
      bookId: id
    }
    axios.put(`http://localhost:8080/api/bookStore/cart/minusQuantity`, cart,
      {
        headers: authHeader(),
      }
    )
      .then((response) => {

        fetch();
        console.log(response.data.message);
        if (response.data.message == "refuse") {
          toast.error("Số lượng không được bé hơn 1 ")
        }

      })
      .catch((error) => {

        console.error(error);
      });

  }

  const handleOrderBook = async () => {
    try {
      let listId = []
      for (let i = 0; i < book.length; i++) {
        const element = book[i];
        listId.push(element.id)
      }
      console.log(listId);

      const response = await axios.put(`http://localhost:8080/api/bookStore/cart/orderBook`, { listId })
        .then(
          () => {
            fetch()
          }
        )

      toast.success("Bạn đá mượn sách ! Vui lòng chờ xác nhận mượn .", {
        style: {
          zIndex: 1000
        }
      })
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const deleteBook = (id) => {
    axios.delete(`http://localhost:8080/api/bookStore/cart/delete/${id}`)
      .then(() => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
        toast.success("Xóa thành công")
        fetch()
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleBorrowed = () => {
    toast.error("Đang mượn sách vui lòng trả sách để mượn thêm !!!")
  }
  const handleReturn = () => {
    toast.error("Bạn đã trả sách, vui lòng xóa giỏ hàng để mượn thêm !!!")
  }


  useEffect(() => {
    axios.get('http://localhost:8080/api/bookStore/cart')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (

    <section className="h-100 h-custom pt-5" style={{ backgroundColor: 'rgb(240, 240, 238)' }}>
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

                        {/* <h6 className="mb-0 text-muted">{book.length != "" ? <> </>: <> Số sản phẩm :  {book.length}</>}</h6> */}
                      </div>

                      <form>
                        {book == undefined ? <>
                          <div></div>
                        </> : <>
                          {book.map((book) =>
                            <>
                              {book.status == "" ? <>
                                <hr className="my-4" />
                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                  <div className="col-md-2 col-lg-2 col-xl-2">
                                    <img src={book.bookId.image} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-3">
                                    <h6 className="text-muted">{book.bookId.bookName}</h6>

                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <span className="btn btn-dark btn-sm" style={{ margin: '1px' }}
                                      onClick={() => handleDeleteQuantity(
                                        book.bookId.id

                                      )}
                                    > -</span>
                                    <span className="btn btn-secondary btn-sm"> {book.quantity}</span>

                                    {book.status == "Borrowed" ? <>
                                      <span className="btn btn-dark btn-sm" onClick={handleBorrowed} style={{ margin: '1px' }} >+</span>
                                    </> : book.status == "Return" ? <>
                                      <span className="btn btn-dark btn-sm" onClick={handleReturn} style={{ margin: '1px' }} >+</span>
                                    </> : <>
                                      <span onClick={() => handleCart(
                                        book.bookId.id

                                      )} className="btn btn-dark btn-sm" style={{ margin: '1px' }} >+</span>
                                    </>}
                                  </div>

                                  {book.status == "" ? <>
                                    <div className="col-md-2 col-lg-21 col-xl-2 text-end">
                                      <h6 style={{ fontSize: '20px', color: '#e91e63' }}>

                                        <span className='mx-2'>
                                        </span>
                                      </h6>
                                    </div>
                                  </> : <></>}
                                  <div className="col-md-2 col-lg-21 col-xl-2 text-end">

                                    <button className='btn btn-danger'
                                      onClick={(e) => {
                                        e.preventDefault()
                                        if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
                                          e.preventDefault()
                                          deleteBook(book.id);
                                        }
                                      }}
                                    >X</button>
                                  </div>
                                  
                                </div >
                              </> : <></>}


                            </>

                          )}
                          <hr className="my-4" />
                        </>}
                        <div className='text-end '>
                          {book == undefined ? <><div></div></> : <>
                            <button className='btn btn-warning' type='submit' style={{ borderRadius: '6px' }} onClick={(e) => handleOrderBook(
                              e.preventDefault(),
                            )}>Mượn sách</button>
                          </>}
                        </div>
                      </form>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section >

  )
}
