import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [],
  user: null,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  function loginUser(user) {
    dispatch({
      type: 'LOGIN_USER',
      payload: user,
    });
  }

  function logoutUser() {
    dispatch({
      type: 'LOGOUT_USER',
    });
  }

  function registerUser(user) {
    // Assuming registration adds the user (you could handle this via a backend).
    dispatch({
      type: 'REGISTER_USER',
      payload: user,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        user: state.user,
        deleteTransaction,
        addTransaction,
        loginUser,
        logoutUser,
        registerUser,
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