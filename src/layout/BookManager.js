import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function BookManager() {
  const [books, setBooks] = useState([]);


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


  return (
    <div className='container-fluid'>
      <Link className='btn btn-outline-primary mt-5' to={'/createBook'}>Thêm sách</Link>
      <table className="table table-striped mt-5" >
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">bookName</th>
          <th scope="col">description</th>
          <th scope="col">loanPrice</th>
          <th scope="col">depositFee</th>
          <th scope="col">author</th>
          <th scope="col">nxb</th>
          <th scope="col">numberOfPage</th>
          <th scope="col">status</th>
          <th scope="col">translator</th>
          <th scope="col">likes</th>
          <th scope="col">disLike</th>
          <th scope="col">quantity</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <td>{book.id}</td>
            <td>{book.bookName}</td>
            <td>{book.description}</td>
            <td>{book.loanPrice}</td>
            <td>{book.depositFee}</td>
            <td>{book.author}</td>
            <td>{book.nxb}</td>
            <td>{book.numberOfPage}</td>
            <td>{book.status}</td>
            <td>{book.translator}</td>
            <td>{book.likes}</td>
            <td>{book.disLike}</td>
            <td>{book.quantity}</td>
            <td>
              <button className='btn btn-warning' >Edit</button>
            </td>
            <td>
            <button className='btn btn-danger'onClick={() => deleteBook(book.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
