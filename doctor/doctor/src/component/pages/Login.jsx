import React, { useState } from "react";
import "./loginbasic.css";
import { setlogin,setuser } from "../data/user";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [user, setUser] = useState({
    doctorUsername: "",
    password: "",
  });
  const [userdata,setuserdata]= useState();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
    const navigate= useNavigate();
  const handleSubmit = async (e) => {
    console.log("test");
    e.preventDefault();

    // Check if both fields are filled
    if (!user.doctorUsername || !user.password) {
      alert("Please fill in both username and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/doctorlogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      
      if (response.ok) {
        if(data.doctorUsername===user.doctorUsername&&data.password===user.password){
              setuserdata(data);
              setuser(data);
              console.log(data);
            console.log("login succesfull");
            navigate('home');
        }
        else{
          console.log("login failed");
        }
     
      } else {
        console.error("Login failed:", data.message || "Unknown error");
      }
    } catch (error) {
      console.error("API call failed:", error.message);
    }
  };

  return (
    <div id="lobwrapper">
      <div id="lobbox">
        <div id="lobtop_header">
          <h3>Login</h3>
          <h5>Sign in to continue to your profile page.</h5>
        </div>
        <div id="lobinputs">
          <form id="loblogin" onSubmit={handleSubmit}>
            <div className="lobcontainer">
              <input
                type="text"
                name="doctorUsername"
                id="lobusername"
                maxLength={50}
                size={30}
                placeholder="doctorUsername"
                value={user.doctorUsername}
                onChange={handleInputChange}
              />
              <br />
            </div>
            <div className="lobcontainer">
              <input
                type="password"
                name="password"
                id="lobpassword"
                maxLength={50}
                size={30}
                placeholder="Password"
                value={user.password}
                onChange={handleInputChange}
              />
              <br />
            </div>
            <div className="lobcontainer">
              <button type="submit">Submit</button>
            </div>
          </form>
          <div id="lobbottom">
            <a href="/register">Create an account</a>
            <a className="lobright_a" href="/forgot-password">
              Forgot password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
