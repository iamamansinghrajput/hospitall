import React, { useEffect, useState } from 'react';
import Reportlist from './Reportlist';
import { userdata } from './data/user';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboardbottom = () => {
  let key = 0;
  function printList(item) {
    key++;
    return <Reportlist name={item} key={key} />;
  }

  const [report, setReport] = useState([]);

  const fetchReports = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/myreport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: userdata.username }),
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

  // useEffect to call fetchReports when the component mounts
  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="dashboardbottom container py-4">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="dashboardbottom-logo text-primary mb-0">Recent Reports</h4>
        <button className="btn btn-outline-primary btn-sm">View All</button>
      </div>

      {/* Reports List */}
      <div className="dashboardbottom-replist">
        {report.length > 0 ? (
          report.map((item) => printList(item))
        ) : (
          <p className="text-muted">No reports available</p>
        )}
      </div>
    </div>
  );
};

export default Dashboardbottom;
