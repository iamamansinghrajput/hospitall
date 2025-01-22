import React, { useState } from "react";


const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    number: "",
    password: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
       async function senduserdb (formData){
            try {
                const response=await fetch("http://localhost:3000/api/register",{
                   method:"POST",
                   headers:{"Content-Type":"application/json"},
                   body:JSON.stringify(formData),
                });
                const data= await response.json();
                if (response.ok){
                    console.log("register is succesfull");
                }
                else{
                    console.log(data.message||"register failed");
                }
                
            } catch (error) {
                console.log(error);
            }
        }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    senduserdb(formData);
    // You can add an API call or other logic here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Information</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
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
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
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
            value={formData.number}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="dob" style={styles.label}>Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
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

export default Register;

