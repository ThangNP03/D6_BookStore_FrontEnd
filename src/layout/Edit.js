
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { storage } from './config/config';
import { uploadBytes, ref, getDownloadURL, listAll } from 'firebase/storage'
import './css/Edit.css'

export default function Edit() {

  const navigate = useNavigate();
  const { bookId } = useParams();
  const [formData, setFormData] = useState({
    bookName: '',
    description: '',
    loanPrice: '',
    depositFee: '',
    author: '',
    nxb: '',
    numberOfPage: '',
    translator: '',
    quantity: '',
    image: '',
    status:''

  });
  const [imageUrl, setImageUrl] = useState("");

  const imagesListRef = ref(storage, "uploads/")
  const uploadImage = (e) => {
    let imageUpload = e.target.files[0];
    if (imageUpload == null) return;
    const imageRef = ref(storage, `bookStore/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        setFormData({ ...formData, image: url });
      });
    });


  };
  useEffect(() => {
    try {
      axios.get(`http://localhost:8080/api/bookStore/book/detallBook/${bookId}`)
        .then((response) => {
          console.log(response.data);
          setFormData(response.data)
        }
        )
    } catch (error) {
      toast.error(error.response.data)
    }
  }, [])


  useEffect(() => {
    listAll(imagesListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrl(url);
        });
      });
    });
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // console.log('imaga===>', formData.image);
  const handleSubmit = (e) => {
    e.preventDefault()
    // Call the API to update the book
    axios.put(`http://localhost:8080/api/bookStore/book/update/${bookId}`, formData)
      .then((response) => {
        toast.success(response.data.message)
        navigate('/bookManager')
      })

      .catch((error) => {
        toast.error(error.response.data);
      });

  }
  return (
    <div className='pb-3'  style={{ backgroundColor: '#f0f0ee' }}>
      <div className='container pt-5' >
        <form className='shadow form-edit  '>
        <h1 className='pb-3' style={{color:'red'}}>Form chỉnh sửa thông tin sách</h1>
          <div>
            <h6>Book Name</h6>
            <input type="text" id="bookName"
              name="bookName"
              value={formData.bookName} onChange={handleChange} /><br />
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
            <input type="text" id="producer" name="nxb" value={formData.nxb} onChange={handleChange} /><br />
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
          <div>
            <h6>Trạng thái </h6>
            <select name="status">
              <option value="0" selected>Còn Hàng </option>
              <option value="1">Hết Hàng</option>
            </select>
          </div>
          <div>
            <h6>Image</h6>
            <img width="100" src={formData.image} alt="new-product" />
            <input type="file" onChange={uploadImage} />
          </div>
          <div>
            <button className='btn btn-success mt-3' onClick={handleSubmit}>Update</button>
            <div className=' pt-3'> <Link to={'/bookManager'}>Trỏ lại trang quản lý</Link></div>
          </div>
        </form>
      </div>
    </div>
  )
}
