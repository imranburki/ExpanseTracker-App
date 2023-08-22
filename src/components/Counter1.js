// // JavaScript source code
// import React, { useReducer } from 'react';
// const initalval = 0;
// const reducer=(state, action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         default:
//             return state;
//     }
// }
// function Counter() {
//     const [count, dispatch] = useReducer(reducer, initalval);
//     return (
//         <div className='div1'>
//             {count}<br/>
//             <button onClick={() => dispatch('increment')}>Increament</button>
//             <button onClick={() => dispatch('decrement')}>Decrement</button>
//         </div>
//     );
// }

import { useReducer} from "react";
const initalval=0
const reducer=(state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            default:
                return state;
        }
    }
// export default Counter;
function Counter(){
    const [count,dispatch]=useReducer(reducer,initalval);
    return(
        <div className='div1'>
            {count}<br/>
            <button onClick={() => dispatch('increment')}>Increament</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
        </div>
    );
}
export default Counter;