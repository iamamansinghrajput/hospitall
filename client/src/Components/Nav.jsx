import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 py-2">
      <div className="container-fluid">
        <div className="navbar-brand">
          <span className='dil'>❤</span> Healthtrack
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-outline-primary">+ Add Report</button>
            </li>
            <li className="nav-item ms-3">
              <button className="btn btn-outline-secondary">Profile</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
