// export default (state,action)=>{
//     switch(action.type){
//         case 'DELETE_TRANSACTION':
//             return {
//                 ...state,
//                 transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
//             }
//             case 'ADD_TRANSACTION':
//                 return {
//                     ...state,
//                     transactions: [action.payload,...state.transactions]
                    
//                 }    
//         default:
//             return state;
//     }
// }
// const appReducer = (state, action) => {
//     switch(action.type){
//         case 'DELETE_TRANSACTION':
//             return {
//                 ...state,
//                 transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
//             }
//         case 'ADD_TRANSACTION':
//             return {
//                 ...state,
//                 transactions: [action.payload, ...state.transactions]
//             }
//             case 'LOGIN_USER':
//                 return {
//                   ...state,
//                   user: action.payload,
//                 };
//               case 'LOGOUT_USER':
//                 return {
//                   ...state,
//                   user: null,
//                 };
//               case 'REGISTER_USER':
//                 return {
//                   ...state,
//                   user: action.payload,
//                 };
//               default:
//                 return state;
//             }
//           };

// export default appReducer;

const appReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    // Other cases...
    default:
      return state;
  }
};

export default appReducer;
