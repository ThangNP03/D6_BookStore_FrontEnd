
import './App.css';
import Login from './layout/Login';
import {   Route, Routes } from "react-router-dom";

import Navbar from './layout/Navbar';
import Register from './layout/Register';
import Home from './layout/Home';
import BookManager from './layout/BookManager';
import CreateBook from './layout/CreateBook';
import Footer from './layout/Footer';
import ListBook from './layout/ListBook';
import BookDetail from './layout/BookDetail';
import Profile from './layout/Profile';
import Err404 from './layout/Err404';
import PrivateRoutesAdmin from './untill/PrivateRoutesAdmin';
import PrivateRoutesLogin from './untill/PrivateRoutesLogin';
import Search from './layout/Search';
import Edit from './layout/Edit';
import Cart from './layout/Cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
       

      <Routes>
        <Route >
          {/* luồng của admin */}
          <Route element={<PrivateRoutesAdmin />}>
            <Route path="/bookManager" element={<BookManager />} />
            <Route path="/createBook" element={<CreateBook/>}/>
            <Route path="/edit/:bookId" Component={Edit}/>
          </Route>
          {/* luồng khi đăng nhập không được vào login register */}
          <Route element={<PrivateRoutesLogin />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          {/* các luồng luôn được vào */}
          <Route path="/" element={<Home />} />
          <Route path="/listBook" element={<ListBook/>}/>
          <Route path="/bookDetail" element={<BookDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/err" element={<Err404/>}/>
        </Route>
      </Routes>
     
      <Footer/>
        
    </div>
  );
}

export default App;
