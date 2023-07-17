import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ListBook() {
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
  return (

    <div className='mt-4 d-flex  flex-wrap' >
      {books.map((book) => (
        <div className='col-4 mt-3' style={{ flex: '1' }}>
          <div className='p-3 ' style={{ backgroundColor: '#fff', width: '250px', height: '300px' }}>
            <div>
                <div className='text-center'>
                    <img src="https://cdn0.fahasa.com/media/catalog/product/m/a/mashle_bia_postcard_tap-03.jpg" width={160} height={160} alt="" />
                </div>
                <div>
                    <p>
                      {book.bookName}
                    </p>
                </div>
            </div>
          </div>

        </div>

      ))}
    </div>

  )
}
