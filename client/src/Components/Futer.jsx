import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Futer = () => {
  return (
    <footer className="futer bg-light text-dark py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <div className="futerlogo h5 mb-0">
              <span className="dil text-danger">❤</span> Healthtrack
            </div>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="futerword">
              2025 First Project with 0% Contribution <br />
              <strong>Aman Singh</strong> <br />
              Full credit goes to <strong>Debabrato Das</strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Futer;
