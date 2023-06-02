


import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { CreateBlog, Home, Navbar } from './components';

const App = () => {
  return (

    <>
      <Navbar />
      <div className="container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createblog" element={<CreateBlog />} />
        </Routes>



      </div>
    </>
  )
}
export default App;






