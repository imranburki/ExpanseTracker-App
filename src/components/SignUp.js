import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function SignUp() {
  const { registerUser } = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 100000000), // Temporary ID (replace with backend ID logic)
      username,
      password,
    };
    registerUser(newUser);
    alert('User registered successfully!');
  };

  return (
    <div className="form-container">
      <h3>Sign Up</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
}
