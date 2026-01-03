import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./auth.css";

const Login = () => {
 
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-clone-hq1y.onrender.com/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "https://zerodhadash.netlify.app";

        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      username: "",
      password: "",
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-logo">
          <h1>Zeroda</h1>
        </div>
        <div className="auth-box">
          <h2 className="auth-title">Welcome back</h2>
          <p className="auth-subtitle">Log in to your account</p>
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Radhe"
                onChange={handleOnChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                className="form-input"
                required
              />
            </div>
            
            <button type="submit" className="auth-btn" >Login</button>
          </form>
          
          <div className="auth-footer">
            <p>Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link></p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
