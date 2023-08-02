


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './css/ListBook.css'
import authHeader from '../service/auth-hearder';

const BookDetail = ({ bookId }) => {
  const [book, setBook] = useState();
  const navigate = useNavigate('')

  useEffect(() => {
    const getBookDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/bookStore/book/detallBook/${bookId}`);
        setBook(response.data);
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
      }
    };

    getBookDetail();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{book.bookName}</h2>
      <p>Tác giả: {book.author}</p>
      <p>Mô tả: {book.description}</p>
      {/* Thêm các thông tin sách khác vào đây */}
    </div>
  );
};

const ListBook = () => {

  // seacrh
  const [search, setSearch] = useState({
    name: ""
  });

  const handleChange = (e) => {
    //   setSearch(e.target.value); // Lưu nội dung của ô nhập liệu vào state "search"
    setSearch({ ...search, [e.target.name]: e.target.value })
    let renderSearch = {
      name: search.name
    }

    e.preventDefault();
    if (search.name.trim() === '') {
      axios.get('http://localhost:8080/api/bookStore/book')
        .then((response) => {
          setBooks(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .get(`http://localhost:8080/api/bookStore/book/searchByBookName/${renderSearch.name}`)
        .then((response) => {
          setBooks(response.data);
         
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }
  const [books, setBooks] = useState([]);
  // console.log("nook", books);
  const [selectedBookId, setSelectedBookId] = useState(null); // State để lưu trữ bookId của cuốn sách đã được chọn
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:8080/api/bookStore/book')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


 
  const handleCart = (id) => {
    let cart = {
      bookId: id
    }

    console.log("idre", cart);
    axios.post(`http://localhost:8080/api/bookStore/cart/addBook`, cart, 
    {
        headers: authHeader(),
    }
    )
    .then((response) => {
      console.log(response.data);
      if(response.data.message = "test"){
        toast.success("Thêm vào giỏ hàng thành công!!");
      }
      
    })
    .catch((error) => {
      toast.error("Vui lòng đăng nhập để mượn sách")
      console.error(error);
    });

  }


  const handleBookClick = (bookId, bookName, description, depositFee, loanPrice, image, likes, numberOfPage, author, nxb, quantity, status, translator) => {
    setSelectedBookId(bookId); // Cập nhật state "selectedBookId" khi người dùng nhấp vào sách
    window.scroll(0,0)
    navigate(
      {
        pathname: '/bookDetail',
        search: `?id=${bookId}`
      }, {
      state: {
        bookId :`${bookId}`,
        bookName: `${bookName}`,
        description: `${description}`,
        depositFee: `${depositFee}`,
        loanPrice: `${loanPrice}`,
        image: `${image}`,
        likes: `${likes}`,
        numberOfPage: `${numberOfPage}`,
        author: `${author}`,
        nxb: `${nxb}`,
        quantity: `${quantity}`,
        status: `${status}`,
        translator: `${translator}`

      }

    }
    )

  };

  return (
    <div className='container pt-4 ' style={{ backgroundColor: '#fff', borderRadius: '0px 0px 6px 6px' }}>
      <div className='col-8'>
      </div>
      <div className='col-4 mt-5'>
        <form className=' '>
          <div className='flex-grow-1 d-flex'>
            <input type="text"
              className='input-search'
              id="search"
              name="name"
              placeholder='Tìm kiếm sách...'
              onChange={handleChange}
            ></input>
            <button className='mx-2 btn btn-outline-danger d-flex '
              type='button'
              style={{ alignItems: 'center' }}
            >
              <svg className='position-relative' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>

        </form>
      </div>
      <div className='d-flex flex-wrap pb-5'>
        {books.map((book) => (
          <div className='col-4 mt-3'
            style={{ flex: '4' }}
            key={book.id}
          >
            <div className='p-3 listBook' style={{ width: '300px', height: 'auto', borderRadius: '6px' }}>
              <div>
                <div key={book.id}

                  onClick={() => handleBookClick(book.id,
                    book.bookName,
                    book.description,
                    book.depositFee,
                    book.loanPrice,
                    book.image,
                    book.likes,
                    book.numberOfPage,
                    book.author,
                    book.nxb,
                    book.quantity,
                    book.status,
                    book.translator
                  )} className='' style={{}}>
                  <span className='over'>
                    <img className='image-book' src={book.image} width={280} height={200} alt="" />
                  </span>
                  <span style={{ fontWeight: '500', fontSize: '18px' }}>
                    {book.bookName}
                  </span>
                </div>

                <div className='mt-1'>

                  <div className='d-flex mt-1' style={{ justifyContent: 'space-between' }}>
                    <p style={{ color: 'red', fontWeight: '700', fontSize: '18px' }}>
                      {book.loanPrice}.000đ
                    </p>
                    <button className='btn btn-danger' onClick={() => handleCart(
                      book.id
                    )}>Thêm vào giỏ mượn</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}


      </div>
    </div>

  );
};

export default ListBook;

