import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

axios.defaults.baseURL = 'http://52.205.87.20:5000';

const initialState = {
  transactions: [],
  user: null,
  loading: true,
  error: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ✅ Fetch user-specific transactions after login
  async function fetchUserTransactions() {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found. Please log in again.');
      }

      const response = await axios.get('/transactions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('here is the call...',response)
      dispatch({ type: 'FETCH_TRANSACTIONS_SUCCESS', payload: response.data });
    } catch (error) {
      console.error('Fetch user transactions error:', error.response?.data || error.message);
      dispatch({
        type: 'FETCH_TRANSACTIONS_ERROR',
        payload: error.response ? error.response.data : 'Server Error',
      });
    }
  }

async function addTransaction(transaction) {
try {
  const token = localStorage.getItem('token'); // Retrieve token
  const response = await axios.post('/transactions', transaction, {
    headers: {
      Authorization: `Bearer ${token}`, // Attach token to headers
    },
  });
  console.log('here in addTranscation...')
  dispatch({ type: 'ADD_TRANSACTION', payload: response.data });
} catch (error) {
  console.error('Add transaction error:', error.response?.data || error.message);
  dispatch({
    type: 'ADD_TRANSACTION_ERROR',
    payload: error.response ? error.response.data : 'Server Error',
  });
}
}

async function deleteTransaction(id) {
  try {
    const token = localStorage.getItem('token'); // Retrieve token
    await axios.delete(`/transactions/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // ✅ Dispatch an action to update local state
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  } catch (error) {
    console.error('Delete transaction error:', error.response?.data || error.message);
    dispatch({
      type: 'DELETE_TRANSACTION_ERROR',
      payload: error.response ? error.response.data : 'Server Error',
    });
  }
}


// async function deleteTransaction(id) {
//   try {
//     console.log('the id is ',id)
//     await axios.delete(`/transactions/${id}`); // Fix double slash issue
//     dispatch({ type: 'DELETE_TRANSACTION', payload: id });
//   } catch (error) {
//     dispatch({
//       type: 'DELETE_TRANSACTION_ERROR',
//       payload: error.response ? error.response.data : 'Server Error',
//     });
//   }
// }
  // ✅ Login User
async function loginUser(credentials) {
  try {
    console.log('Credentials being sent:', credentials);

    const response = await axios.post('/users/login', credentials, {
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('Response from login:', response.data);

    const { token, username } = response.data;

    if (token) {
      localStorage.setItem('token', token); // Save token in localStorage

      dispatch({
        type: 'LOGIN_USER',
        payload: { username },
      });

      // ✅ Fetch user transactions immediately after login
      await fetchUserTransactions();  
    } else {
      throw new Error('Token not received');
    }
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    dispatch({
      type: 'FETCH_TRANSACTIONS_ERROR',
      payload: error.response ? error.response.data : 'Server Error',
    });
  }
}
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        user: state.user,
        loading: state.loading,
        error: state.error,
        fetchUserTransactions,
        addTransaction,
        deleteTransaction,
        loginUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// import React, { createContext, useReducer, useEffect } from 'react';
// import AppReducer from './AppReducer';
// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000';

// const initialState = {
//   transactions: [],
//   user: null,
//   loading: true,
//   error: null,
// };

// export const GlobalContext = createContext(initialState);

// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

//   async function fetchTransactions() {
//     try {
//       const token = localStorage.getItem('token'); // Retrieve token from localStorage
//       console.log(`the token is ${token}`)
//       const response = await axios.get('/transactions', {
//         headers: {
//           Authorization: `Bearer ${token}`, // Attach token to headers
//         },
//       });
//       const result = await response.json();
//       console.log('the frontend result is ', result);
  
//       dispatch({ type: 'FETCH_TRANSACTIONS_SUCCESS', payload: response.data });
//     } catch (error) {
//       console.error('Fetch transactions error:', error.response?.data || error.message);
//       dispatch({
//         type: 'FETCH_TRANSACTIONS_ERROR',
//         payload: error.response ? error.response.data : 'Server Error',
//       });
//     }
//   }

//   async function addTransaction(transaction) {
//     try {
//       const token = localStorage.getItem('token'); // Retrieve token
//       const response = await axios.post('/transactions', transaction, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Attach token to headers
//         },
//       });
//       dispatch({ type: 'ADD_TRANSACTION', payload: response.data });
//     } catch (error) {
//       console.error('Add transaction error:', error.response?.data || error.message);
//       dispatch({
//         type: 'ADD_TRANSACTION_ERROR',
//         payload: error.response ? error.response.data : 'Server Error',
//       });
//     }
//   }

//   async function deleteTransaction(id) {
//     try {
//       await axios.delete(`/transactions/${id}`); // Fix double slash issue
//       dispatch({ type: 'DELETE_TRANSACTION', payload: id });
//     } catch (error) {
//       dispatch({
//         type: 'DELETE_TRANSACTION_ERROR',
//         payload: error.response ? error.response.data : 'Server Error',
//       });
//     }
//   }

//   function loginUser(user) {
//     dispatch({
//       type: 'LOGIN_USER',
//       payload: user,
//     });
//   }

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   return (
//     <GlobalContext.Provider
//       value={{
//         transactions: state.transactions,
//         user: state.user,
//         loading: state.loading,
//         error: state.error,
//         fetchTransactions,
//         addTransaction,
//         //deleteTransaction,
//         loginUser,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };

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