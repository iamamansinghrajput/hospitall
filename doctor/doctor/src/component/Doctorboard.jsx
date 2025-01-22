import React, { useEffect, useState } from 'react'
import Reportlist from './Reportlist'
import "./doctorboard.css"

const Doctorboard = () => {

    let key=0;
    
     const printList = (item) => {
      return (
        <div><Reportlist name={item}/> </div>
      )
    }
    

  
   const [report, setReport] = useState([]);

    function submit(t){
       t.preventDefault();
        let cli= document.getElementById("fname").value;
        console.log(cli);
       
        
          

            fetchReports(cli);
            // useEffect to call fetchReports when the component mounts
            // useEffect((cli) => {
            //   fetchReports();
            // }, []);

     }
     const fetchReports = async (cli) => {
        try {
          const response = await fetch('http://localhost:3000/api/myreport', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: cli }),
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
    

  return (
    <div className="doctorboard">
         <div className="doctorboardnav">
            <form onSubmit={submit}>
              <div className="fname">Patient name:</div>
              <div className="inputbox"> <input type="text" id="fname" name="fname"  /></div>
              <div className="enter"> <input type="submit" id="submit" defaultValue="Submit" /></div> 
            </form>
         </div>
         <div className="aman">
        { report.map(printList)}
         </div>

    </div>
  )
}

export default Doctorboard