import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './css/BookManager.css'

export default function BookManager() {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const navigate = useNavigate()
  // Gọi Api book mỗi khi vào 
  useEffect(() => {
    // Fetch data from the backend API
    axios.get('http://localhost:8080/api/bookStore/book')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Xóa book
  const deleteBook = (id) => {
    // Call the delete API to remove the book
    axios.delete(`http://localhost:8080/api/bookStore/book/delete/${id}`)
      .then(() => {
        // Remove the deleted book from the local state
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
        toast.success("Xóa thành công")
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleBookClick=(bookId)=>{
    navigate(`/edit/${bookId}`)
  }
  return (
    <div className='container '>
      <Link className='btn btn-outline-primary mt-3' to={'/createBook'}>Thêm sách</Link>
      <div className='grid-container '>
        <table className="table mt-3 book-table" >
          <thead>
            <tr className='' >
              <th scope="col">id</th>
              <th scope="col">image</th>
              <th scope="col">bookName</th>
              <th scope="col">loanPrice</th>
              <th scope="col">depositFee</th>
              <th scope="col">author</th>
              <th scope="col">nxb</th>
              <th scope="col">numberOfPage</th>
              <th scope="col">status</th>
              <th scope="col">translator</th>
              <th scope="col">quantity</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}  className='book-manager'>
                <td>{book.id}</td>
                <td><img src={book.image} alt={book.bookName} width={'100px'} height={'100px'} /></td>
                <td>{book.bookName}</td>
                <td>{book.loanPrice}</td>
                <td>{book.depositFee}</td>
                <td>{book.author}</td>
                <td>{book.nxb}</td>
                <td>{book.numberOfPage}</td>
                <td>{book.status ? 'Hết hàng '  :  'Còn hàng'}</td>
                <td>{book.translator}</td>
                <td>{book.quantity}</td>
                <td>
                  <button className='btn btn-warning ' id ='edit'
                      onClick={() => handleBookClick(
                        book.id
                      )}
                  >Edit</button>
                  &nbsp;

                </td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => {
                      if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
                        deleteBook(book.id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
