<<<<<<< HEAD

import './customCss.css';
import React, {createContext } from 'react';
import Counter from './components/Counter1.js';
import Header from './components/Header.js';
import Balance from  './components/Balance.js'
import IncomeExpances from './components/IncomeExpances';
import TransectionList from './components/TransectionList';
import AddTransections from './components/AddTransections';

import { GlobalProider } from './context/GlobalState';

const username = createContext();
const userid = createContext();

function App() {
  return (
    <GlobalProider>
       <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpances/>
        <TransectionList/>
        <AddTransections/>
      </div>
         
        </GlobalProider>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> fade7b899622b2aada2d2a644de5cfdcc51b9770
  );
}

export default App;
<<<<<<< HEAD
export { username, userid };
=======
>>>>>>> fade7b899622b2aada2d2a644de5cfdcc51b9770
