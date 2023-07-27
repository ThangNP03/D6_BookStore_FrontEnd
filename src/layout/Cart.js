import React, { useEffect, useState } from 'react'
import "./css/Cart.css"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function Cart() {
  const [book, setBooks] = useState();

  console.log("order===>", book);
  useEffect(() => {
    // Fetch data from the backend API
    axios.get(`http://localhost:8080/api/bookStore/cart`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (

    <section className="h-100 h-custom" style={{ backgroundColor: 'rgb(240, 240, 238)' }}>
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
                      <hr className="my-4" />
                      {book == undefined ? <>
                        <div></div>
                      </> : <>
                        {book.map((book) =>
                          <>
                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img src={book.bookId.image} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">{book.bookId.bookName}</h6>

                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <span className="btn btn-dark btn-sm" style={{ margin: '1px' }} >-</span>
                                <span className="btn btn-secondary btn-sm"> {book.bookId.quantity}</span>
                                <span className="btn btn-dark btn-sm" style={{ margin: '1px' }} >+</span>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">€ {book.bookId.loanPrice} .00</h6>
                              </div>
                              <div className="col-md-2 col-lg-21 col-xl-2 text-end">

                                <button className='btn btn-danger'>X</button>
                              </div>
                            </div>
                          </>
                        )}

                      </>}
                    </div>
                    <hr className="my-4" />
                  </div>
                </div>
                {/* <div className="col-lg-4 bg-grey">
                  <div className="p-5">
                    <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="text-uppercase">items 3</h5>
                      <h5>€ 132.00</h5>
                    </div>
                    <h5 className="text-uppercase mb-3">Shipping</h5>
                    <div className="mb-4 pb-2">
                      <select className="select">
                        <option value={1}>Standard-Delivery- €5.00</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        <option value={4}>Four</option>
                      </select>
                    </div>
                    <h5 className="text-uppercase mb-3">Give code</h5>
                    <div className="mb-5">
                      <div className="form-outline">
                        <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <div className="d-flex justify-content-between mb-5">
                      <h5 className="text-uppercase">Total price</h5>
                      <h5>€ 137.00</h5>
                    </div>
                    <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">Register</button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section >

  )
}
