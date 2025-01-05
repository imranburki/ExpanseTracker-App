import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transection } from './Transection';

export default function TransectionList() {
  const {transactions}=useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
      {transactions.map(transaction => (
  <Transection key={transaction._id} transaction={transaction} />
))}

      
      </ul>
    </>
  )
}
