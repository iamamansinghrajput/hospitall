import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import ReportPage from './Pages/ReportPage';
import Nav from './Nav';
import Futer from './Futer';
import Addreport from './Addreport';
import './App.css'; // Include the CSS file for layout

const Router = () => {
  return (
    <div className="app-layout">
      <header>
        <Nav />
      </header>
      <main className="flex-grow-1">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/report/:_id" element={<ReportPage />} />
            <Route path="/addreport" element={<Addreport />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>
        <Futer />
      </footer>
    </div>
  );
};

export default Router;
