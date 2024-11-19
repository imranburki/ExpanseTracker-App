import './customCss.css';
import React, { useState } from 'react';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Balance from './components/Balance'; // Includes Header
import IncomeExpances from './components/IncomeExpances';
import TransectionList from './components/TransectionList';
import AddTransections from './components/AddTransections';
import Login from './components/Login';
import SignUp from './components/SignUp'; // Import SignUp Component

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false); // Log the user out
  };

  return (
    <GlobalProvider>
      <Router>
        {loggedIn && <Balance onLogout={handleLogout} />} {/* Render Header and Balance */}
        <Routes>
          {/* Login route */}
          <Route
            path="/"
            element={loggedIn ? <Navigate to="/dashboard" /> : <Login setLoggedIn={setLoggedIn} />}
          />
          {/* Signup route */}
          <Route
            path="/signup"
            element={loggedIn ? <Navigate to="/dashboard" /> : <SignUp />}
          />
          {/* Main dashboard */}
          <Route
            path="/dashboard"
            element={
              loggedIn ? (
                <Dashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

// Dashboard component for main application
function Dashboard() {
  return (
    <div className="container">
      <IncomeExpances />
      <TransectionList />
      <AddTransections />
    </div>
  );
}

export default App;
