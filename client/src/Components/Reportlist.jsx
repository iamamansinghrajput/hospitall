import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './reportlist.css'; // Custom CSS for additional styling

const Reportlist = (props) => {
  const navigate = useNavigate();
  const reportId = props.name._id;

  const handleViewAll = () => {
    navigate(`/report/${reportId}`);
  };

  return (
    <div className="card mb-3 shadow-sm report-card">
      <div className="card-body d-flex justify-content-between align-items-center">
        {/* Doctor's Name Section */}
        <div className="report-info">
          <h5 className="text-primary fw-bold mb-0">{props.name.doctorName}</h5>
          <p className="text-muted mb-0 small">Report ID: {reportId}</p>
        </div>

        {/* "View All" Button */}
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={handleViewAll}
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Reportlist;
