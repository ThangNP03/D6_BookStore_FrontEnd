
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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/bookManager' element={<BookManager/>}/>
        <Route path='/createBook' element={<CreateBook/>}/>
        <Route path='/listBook' element={<ListBook/>}/>
      </Routes>
     
      <Footer/>
        
    </div>
  );
}

export default App;
