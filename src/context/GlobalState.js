import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';


const initialState = {
  transactions: [],
  user: null,
  loading: true,
  error: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function fetchTransactions() {
    try {
      const response = await axios.get('/transactions'); // Update endpoint if needed
      dispatch({ type: 'FETCH_TRANSACTIONS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({
        type: 'FETCH_TRANSACTIONS_ERROR',
        payload: error.response ? error.response.data : 'Server Error',
      });
    }
  }

  async function addTransaction(transaction) {
    try {
      const response = await axios.get('http://localhost:5000/transactions'); // Adjust port if needed
      dispatch({ type: 'ADD_TRANSACTION', payload: response.data });
    } catch (error) {
      dispatch({
        type: 'ADD_TRANSACTION_ERROR',
        payload: error.response ? error.response.data : 'Server Error',
      });
    }
  }
  
  async function deleteTransaction(id) {
    try {
      await axios.delete(`/transactions/${id}`); // Fix double slash issue
      dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    } catch (error) {
      dispatch({
        type: 'DELETE_TRANSACTION_ERROR',
        payload: error.response ? error.response.data : 'Server Error',
      });
    }
  }
  function loginUser(user) {
    dispatch({
      type: 'LOGIN_USER',
      payload: user,
    });
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        user: state.user,
        loading: state.loading,
        error: state.error,
        fetchTransactions,
        addTransaction,
        deleteTransaction,
        loginUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


// import React, {createContext,useReducer } from 'react';
// import AppReducer from './AppReducer';


// // initial state
// const initialState={
// transactions : []
// }
// // create context
// export const GlobalContext= createContext(initialState)

// // provider component
// export const GlobalProider =({children})=>{
// const [state,dispatch] = useReducer(AppReducer,initialState);

// // Actions
// function deleteTransaction(id){
//   dispatch({
//     type: 'DELETE_TRANSACTION',
//     payload: id
//   })
// }

// function addTransaction(transaction){
//   dispatch({
//     type: 'ADD_TRANSACTION',
//     payload: transaction
//   })
// }
// function loginUser(user) {
//   dispatch({
//     type: 'LOGIN_USER',
//     payload: user,
//   });
// }

// function logoutUser() {
//   dispatch({
//     type: 'LOGOUT_USER',
//   });
// }

// function registerUser(user) {
//   // Assuming registration adds the user (you could handle this via a backend).
//   dispatch({
//     type: 'REGISTER_USER',
//     payload: user,
//   });
// }
//   return (<GlobalContext.Provider value={
//     {
//       transactions: state.transactions,
//       deleteTransaction,
//       addTransaction,
//       user: state.user,
//       loginUser,
//       logoutUser,
//       registerUser,
//     }
//   }>
//     {children}
//   </GlobalContext.Provider>)
// }