import './customCss.css';
import React, { useState } from 'react';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpances from './components/IncomeExpances';
import TransectionList from './components/TransectionList';
import AddTransections from './components/AddTransections';
import Login from './components/Login';
import SignUp from './components/SignUp'; // Import SignUp Component
import Profile from './components/Profile';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <GlobalProvider>
      <Router>
        <Routes>
          {/* Default route: Login */}
          <Route
            path="/"
            element={loggedIn ? <Navigate to="/dashboard" /> : <Login setLoggedIn={setLoggedIn} />}
          />
          {/* Signup Route */}
          <Route
            path="/signup"
            element={loggedIn ? <Navigate to="/dashboard" /> : <SignUp />}
          />
          
          {/* Only show Header and app components when logged in */}
          <Route
            path="/dashboard"
            element={loggedIn ? (
              <>
                <Header />
                <Dashboard />
              </>
            ) : (
              <Navigate to="/" />
            )}
          />

          {/* Profile Route */}
          <Route
            path="/profile"
            element={loggedIn ? (
              <>
                <Header />
                <Profile />
              </>
            ) : (
              <Navigate to="/" />
            )}
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
      <Balance />
      <IncomeExpances />
      <TransectionList />
      <AddTransections />
    </div>
  );
}

export default App;
