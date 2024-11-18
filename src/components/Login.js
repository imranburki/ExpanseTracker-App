import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Login.css'; // Add this CSS file for styling

export default function Login({ setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password ==='password') {
      loginUser({ username });
      setLoggedIn(true);
    } else {
      alert('invalid Username or Password');
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
          <h2>Welcome Back!</h2>
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
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
