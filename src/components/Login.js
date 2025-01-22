import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import './Login.css'; // Add this CSS file for styling

export default function Login({ setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useContext(GlobalContext);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://52.205.87.20:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        mode: 'no-cors',
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Inside respone.ok!!!')
        console.log('data of data.username ',response)
        loginUser({username, password})
        //loginUser({ username: data.username }); // Use the username from the response
        setLoggedIn(true);
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
            alt="Login Icon"
            className="login-icon"
          />
          <h2>Welcome Back! here</h2>
          <p>Login to access your account</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
        <p className="signup-link">
          Don't have an account?{' '}
          <Link to="/signup" className="link">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
