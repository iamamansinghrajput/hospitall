import React from 'react'
import "./doctorboard.css"

const Doctorboard = () => {

    function submit(t){
       t.preventDefault();
        let cli= document.getElementById("fname").value;
        console.log(cli);

        const [report,setReport]= useState([]);
            
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

    }
    

  return (
    <div className="doctorboard">
         <div className="doctorboardnav">
    <form onSubmit={submit}>
  <label htmlFor="fname">First name:</label><br />
  <input type="text" id="fname" name="fname"  /><br />
  <input type="submit" defaultValue="Submit" />
</form>

         </div>
    </div>
  )
}

export default Doctorboard