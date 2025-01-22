import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './pages/Home';
import ReportPage from './pages/ReportPage';
import Futer from './Futer';
import Login from './pages/Login';
import Register from './pages/Register';

const Router = () => {
  return (
    <>
    <Nav/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/report/:_id" element={<ReportPage/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
    <Futer/>
    
    </>
  )
}

export default Router
