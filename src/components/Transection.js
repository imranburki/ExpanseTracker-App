import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transection=({transaction})=> {
    const sign = transaction.amount < 0 ? '-' : '+';
    const {deleteTransaction}=useContext(GlobalContext);

  return (
      <li className={transaction.amount < 0 ? "minus": "plus"} >
            {transaction.text} <span>{sign} $ {Math.abs(transaction.amount) }</span>
            <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
          </li> 
    
  )
}
