import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateBook() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        bookName: '',
        description: '',
        loanPrice: '',
        depositFee: '',
        author: '',
        producer: '',
        numberOfPage: '',
        translator: '',
        quantity: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Call the API to create a new book
        axios.post('http://localhost:8080/api/bookStore/book/create', formData)
          .then((response) => {
            toast.success("Thêm mới thành công")
            navigate("/bookManager")
            // Reset the form data
            setFormData({
              bookName: '',
              description: '',
              loanPrice: '',
              depositFee: '',
              author: '',
              producer: '',
              numberOfPage: '',
              translator: '',
              quantity: '',
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };
    return (
            <div className='container'>
             <div className='mt-5'> <Link   to={'/bookManager'}>Trỏ lại trang quản lý</Link></div>
              <h2>Form thêm mới sách</h2>
              <form style={{ width: '40%', margin: ' 0 auto' }} className='shadow p-5' onSubmit={handleSubmit}>
              
                <div>
                  <h6>Book Name</h6>
                  <input type="text" id="bookName" name="bookName" value={formData.bookName} onChange={handleChange} /><br />
                </div>
                <div>
                  <h6>Description</h6>
                  <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} /><br />
                </div>
        
                <div>
                  <h6>Loan Price</h6>
                  <input type="number" id="loanPrice" name="loanPrice" value={formData.loanPrice} onChange={handleChange} /><br />
                </div>
                <div>
                  <h6>Deposit Fee</h6>
                  <input type="number" id="depositFee" name="depositFee" value={formData.depositFee} onChange={handleChange} /><br />
                </div>
        
                <div>
                  <h6>Author</h6>
                  <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} /><br />
                </div>
                <div>
                  <h6>Producer</h6>
                  <input type="text" id="producer" name="producer" value={formData.producer} onChange={handleChange} /><br />
                </div>
        
                <div>
                  <h6>Number OfPage</h6>
                  <input type="number" id="numberOfPage" name="numberOfPage" value={formData.numberOfPage} onChange={handleChange} /><br />
                </div>
                <div>
                  <h6>Translator</h6>
                  <input type="text" id="translator" name="translator" value={formData.translator} onChange={handleChange} /><br />
                </div>
        
                <div>
                  <h6>Quantity</h6>
                  <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} /><br />
                </div>
        
                <button className='btn btn-success mt-3' type="submit">Create</button>
              </form>
            </div>
          );
    
}
