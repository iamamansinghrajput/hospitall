import React, { useState } from "react";


const Addreport = () => {
  const [formReport, setFormReport] = useState({
    username: "",
    name: "",
    age: "",
    number: "",
    weight: "",
    bloodGroup: "",
    sugerLevel: "",
    doctorName: "",
    doctorUsername: "",
    hospitalName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormReport((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
       async function senduserdb (formReport){
            try {
               
                const response=await fetch("http://localhost:3000/api/postreport",{
                   method:"POST",
                   headers:{"Content-Type":"application/json"},
                   body:JSON.stringify(formReport),
                });
                console.log("test");
                const data= await response.json();
                if (response.ok){
                    console.log("report submit");
                }
                else{
                    console.log(data.message||"report filed");
                }
                
            } catch (error) {
                console.log(error);
            }
        }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formReport);
    senduserdb(formReport);
    // You can add an API call or other logic here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Patient Report</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>Username</label>
          <input
            type="text"
            id="Username"
            name="username"
            value={formReport.username}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formReport.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="age" style={styles.label}>Age</label>
          <input
            type="tel"
            id="age"
            name="age"
            value={formReport.age}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="number" style={styles.label}>Phone Number</label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formReport.number}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="weight" style={styles.label}>Weight</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={formReport.weight}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="bloodGroup" style={styles.label}>Blood Group</label>
          <input
            type="text"
            id="bloodgroup"
            name="bloodGroup"
            value={formReport.bloodGroup}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="sugerLevel" style={styles.label}>Suger Level</label>
          <input
            type="text"
            id="sugerLevel"
            name="sugerLevel"
            value={formReport.sugerLevel}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="doctorName" style={styles.label}>Doctor Name</label>
          <input
            type="text"
            id="doctorName"
            name="doctorName"
            value={formReport.doctorName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="doctorUsername" style={styles.label}>Doctor Username</label>
          <input
            type="text"
            id="doctorUsername"
            name="doctorUsername"
            value={formReport.doctorUsername}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="hospitalName" style={styles.label}>Hospital Name</label>
          <input
            type="text"
            id="hospitalName"
            name="hospitalName"
            value={formReport.hospitalName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <button type="submit" style={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    border: "1px solid #eaeaea",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Addreport;

