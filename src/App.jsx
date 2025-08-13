import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";
import Landing1 from './pages/Landing1';
import BookingPage from './pages/BookingPage';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Landing1 />} />
      <Route path="/booking" element={<BookingPage />} />

    </Routes>
    <Footer/>
    </>
  )
}

export default App
