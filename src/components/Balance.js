import React, { useContext } from 'react';
import Header from './Header';
import { GlobalContext } from '../context/GlobalState';

function Balance({ onLogout }) {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Take Control of Your Money</h3>
        <Header onLogout={onLogout} />
      </div>
      <h2>${total}</h2>
    </>
  );
}

export default Balance;
