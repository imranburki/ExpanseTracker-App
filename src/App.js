
import './customCss.css';
import React, { useContext, useState } from 'react';
import { GlobalProvider, GlobalContext } from './context/GlobalState';
// import Counter from './components/Counter1.js';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header.js';
import Balance from  './components/Balance.js'
import IncomeExpances from './components/IncomeExpances';
import TransectionList from './components/TransectionList';
import AddTransections from './components/AddTransections';
// import SignUp from './components/SignUp';
import Login from './components/Login';

// const username = createContext();
// const userid = createContext();


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <GlobalProvider>
      <Router>
        <Routes>
          {/* Default route: Login */}
          <Route
            path="/"
            element={
              loggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login setLoggedIn={setLoggedIn} />
              )
            }
          />
          {/* Main app components route */}
          <Route
            path="/dashboard"
            element={
              loggedIn ? <Dashboard /> : <Navigate to="/" />
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
      <Balance />
      <IncomeExpances />
      <TransectionList />
      <AddTransections />
    </div>
  );
}

export default App;

// export { username, userid };
