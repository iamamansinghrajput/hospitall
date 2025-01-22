import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./report.css"
const Report = () => {

    let id=useParams();
    const [report,setReport]= useState([]);
    
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
    
        // useEffect to call fetchReports when the component mounts
        useEffect(() => {
          fetchReports();
        }, []);
  return (
    <div className="report">
    <div className="medicalReport">
      <div className="medicalReportleft">
        Medical Report Details
      </div>
      <div className="medicalReportright">
      + print
      </div>
    </div>
    <div className="patient">
      <div className="patientleft">
        Patient:- {report.username}
      </div>
      <div className="patientright">
        <div className="patientstable">
           Stable
        </div>
        
      </div>
    </div>
    <div className="reportboard">
      <div className="reportboardvitals">
        <div className="vitalsname">
          Vitals
        </div>
        <div className="hospital">
          Hospital Name:{report.hospitalName}
        </div>
        <div className="reportdoctor">
          Doctor Name:{report.doctorName}
        </div>
        <div className="reportnamee">
          Patient Name:{report.name}
        </div>
        <div className="phoneno">
          Contact:{report.number}
        </div>
        <div className="age">
          Age:{report.age}
        </div>
        <div className="weight">
          Weight:{report.weight}
        </div>
        <div className="bloodgroup">
          Blood Group:{report.bloodGroup}
        </div>
        <div className="sugarlevel">
          Suger Level:{report.sugerLevel}
        </div>
      </div>
      <div className="reportboarddiagnosis">

          Diagnosis
      </div>
     
    </div>
    <div className="reportboardprescriptions">

Prescriptions
</div>
   </div>
  )
}

export default Report