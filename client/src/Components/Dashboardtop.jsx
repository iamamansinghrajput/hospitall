import React, { useState, useEffect } from 'react';
import './dashboardtop.css'; // Ensure this file doesn't conflict with Bootstrap classes
import { userdata } from './data/user';

const Dashboardtop = (props) => {
  const [report, setReport] = useState([]);

  async function apifatch() {
    try {
      const response = await fetch("http://localhost:3000/api/myreport", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userdata.username }),
      });

      const reportList = await response.json();
      if (response.ok) {
        setReport(reportList);
      } else {
        console.log("Response not found");
      }
    } catch (error) {
      console.error("API call failed:", error.message);
    }
  }

  useEffect(() => {
    apifatch();
  }, []);

  return (
    <div className="dashboardtop container-fluid p-3">
      <div className="dashboardtopnav d-flex justify-content-between align-items-center mb-3">
        <div className="dashboardtopleft">
          <div className="dashboardtoplogo h5 text-primary">
            {props.value.username}
          </div>
        </div>
        <div className="dashboardtopright">
          <button className="btn btn-primary">+ Add New</button>
        </div>
      </div>
      <div className="dashboardtopmain row text-center">
        <div className="dashboardtopbox col-md-4 mb-3">
          <div className="p-3 bg-light border rounded">
            <strong>Diagnosis Reports</strong>
            <br /> 
            <span className="text-success h5">{report.length}</span>
          </div>
        </div>
        <div className="dashboardtopbox col-md-4 mb-3">
          <div className="p-3 bg-light border rounded">
            <strong>Prescriptions</strong>
          </div>
        </div>
        <div className="dashboardtopbox col-md-4 mb-3">
          <div className="p-3 bg-light border rounded">
            <strong>Appointments</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardtop;
