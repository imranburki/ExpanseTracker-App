
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
  );
}

//export default App;
export { username, userid };
