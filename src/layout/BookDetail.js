import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ListBook from './ListBook';
import './css/BookDetail.css'
import axios from 'axios';
export default function BookDetail() {

  const [showFullText, setShowFullText] = useState(false);
  const location = useLocation();
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const[book, setBook] = useState();
  const navigate = useNavigate();
  const handleCart = (bookId) => {
    navigate(`/cart/${bookId}`)
  }
  useEffect(() => {
    axios.get('http://localhost:8080/api/bookStore/book')
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log("Book===>");


  return (
    <div className='pt-5 ' style={{ backgroundColor: '#f0f0ee' }}>
      <div className='container' style={{ borderRadius: '6px', backgroundColor: '#fff' }}>
        <div className='row  ' >
          <div className='d-flex' >
            <div className='col-5 mt-4' style={{}}>
              <span >
                <img src={location.state.image} alt="ảnh lõi " style={{ width: '400px', height: '300px' }} />


              </span>
            </div>
            <span className=' mt-4 hear-all' >
              <svg className='hear-icons' color='red' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              </svg>
            </span>
            <span className='mt-4 hear-all'>
              <svg className='hear-icons' style={{ color: 'red' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
              </svg>
            </span>
            <div className='col-7 mt-4'>
              <h3>
                {location.state.bookName}
              </h3>
              <div className='d-flex' >

                <div className='col-8'>

                  <p>
                    Nhà xuất bản  :  {location.state.nxb}
                  </p>

                  <p>
                    <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                    <span> Thời gian giao hàng : 3-7 ngày</span>

                  </p>
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                      <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                      <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                    </svg>
                    <span className='mx-2'>
                      Thời gian trả sách : 30 ngày kể từ ngày mượn sách
                    </span>
                  </p>
                  <p style={{ color: '#C92127', fontSize: '36px' }}> <em>Giá mượn sách : {location.state.loanPrice}.000đ</em></p>

                  <div className='mt-3'>
                    {/* <span> <button className='btn btn-outline-danger '>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg> Thêm vào giỏ mượn sách</button></span> */}
                    {/* <button className='btn btn-danger' onClick={() => handleCart(
                        book.bookId
                    )}>Thêm vào giỏ mượn</button>
                    <span className='mx-3  '>
                      <Link className='btn btn-outline-danger ' to={'/cart'}>Mượn sách</Link>
                    </span> */}
                  </div>
                  <div className='mt-3'>
                    <Link className='back' to={'/'} style={{ textDecoration: 'none ' }}>
                      Trở lại trang chủ </Link>
                  </div>
                  <div>

                  </div>
                </div>
                <div className='col-4'>
                  <p>   Tác giả :  {location.state.author}</p>
                  <p> Trạng thái : <span>
                    {location.state.status ? 'Hoàn thành' : 'Đang tiến hành '}
                  </span>
                    <span className='mx-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
                        <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                        <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                      </svg>
                    </span>
                  </p>
                  <p>
                    Người dịch : {location.state.translator}
                  </p>
                  <p>
                    Số trang  : {location.state.numberOfPage}
                  </p>
                </div>



              </div>
            </div>
          </div>


          <div className='col-12' >
            <p className='mt-2'>
              {showFullText ? (
                <span>
                  {location.state.description}
                </span>
              ) : null}
            </p>
            <div className='pb-5'>

              <button className='btn btn-outline-secondary ' onClick={toggleText} id="myBtn">
                {showFullText ? 'Thu Gọn' : 'Xem thêm'}
              </button>


            </div>
          </div>
        </div>

      </div>
      <div className='d-flex p-3 mt-4 container' style={{ backgroundColor: '#FCDAB0', borderRadius: '6px 6px 0px 0px' }}>
        <div className='d-flex'>
          <img src="	https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_flashsale@3x.png" alt=" ảnh" />
          <h3 className='mx-3'>Flash Sale</h3>
        </div>
      </div>
      <ListBook />
    </div>)
}



