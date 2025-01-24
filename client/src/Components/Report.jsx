import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./report.css";

const Report = () => {
  let id = useParams();
  const [report, setReport] = useState([]);

  const fetchReports = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/getreport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: id }),
      });

      if (response.ok) {
        const reportList = await response.json();
        setReport(reportList);
        console.log(reportList);
      } else {
        console.error('Response not found');
      }
    } catch (error) {
      console.error('API call failed:', error.message);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="report container-fluid px-4 py-4 bg-light">
      <div className="medical-report-header d-flex justify-content-between align-items-center shadow-sm p-3 mb-4 bg-white rounded">
        <h4 className="mb-0 text-primary">
          <span className="material-icons">description</span> Medical Report Details
        </h4>
        <button className="btn btn-outline-primary btn-sm">
          <span className="material-icons">print</span> Print Report
        </button>
      </div>

      {/* <div className="d-flex justify-content-center mb-4">
        <img src={illustration} alt="Medical Illustration" className="img-fluid" style={{ maxHeight: '200px' }} />
      </div> */}

      <div className="patient-info card shadow-sm mb-4">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            <span className="material-icons text-primary">person</span> Patient: {report.username || 'N/A'}
          </h5>
          <div className={`badge px-3 py-2 ${report.condition === 'Stable' ? 'bg-success' : 'bg-danger'}`}>
            {report.condition || 'Unknown'}
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm p-4 h-100">
            <h5 className="text-success">
              <span className="material-icons">health_and_safety</span> Vitals
            </h5>
            <ul className="list-unstyled mt-3">
              <li>
                <strong>Hospital:</strong> {report.hospitalName || 'N/A'}
              </li>
              <li>
                <strong>Doctor:</strong> {report.doctorName || 'N/A'}
              </li>
              <li>
                <strong>Patient:</strong> {report.name || 'N/A'}
              </li>
              <li>
                <strong>Contact:</strong> {report.number || 'N/A'}
              </li>
              <li>
                <strong>Age:</strong> {report.age || 'N/A'}
              </li>
              <li>
                <strong>Weight:</strong> {report.weight || 'N/A'}
              </li>
              <li>
                <strong>Blood Group:</strong> {report.bloodGroup || 'N/A'}
              </li>
              <li>
                <strong>Sugar Level:</strong> {report.sugarLevel || 'N/A'}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm p-4 h-100">
            <h5 className="text-danger">
              <span className="material-icons">diagnosis</span> Diagnosis
            </h5>
            <p className="mt-3">
              {report.diagnosis || 'Detailed diagnosis information will be displayed here, including prescribed medications and doctor notes.'}
            </p>
          </div>
        </div>
      </div>

      <div className="card shadow-sm mt-4 p-4 text-center bg-light">
        <h5 className="text-primary">
          <span className="material-icons">medication</span> Prescriptions
        </h5>
        <p>
          {report.prescriptions || 'A list of prescribed medications will be shown here.'}
        </p>
      </div>
    </div>
  );
};

export default Report;
