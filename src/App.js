
import './App.css';
import Login from './layout/Login';
import {   Route, Routes } from "react-router-dom";

import Navbar from './layout/Navbar';
import Register from './layout/Register';
import Home from './layout/Home';
import BookManager from './layout/BookManager';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/bookManager' element={<BookManager/>}/>
      </Routes>
     
      
        
    </div>
  );
}

export default App;
