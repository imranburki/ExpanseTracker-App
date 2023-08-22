// JavaScript source code
import React,{useContext} from 'react';
import { username, userid } from '../App';
import { GlobalContext } from '../context/GlobalState';

function Balance() {
    const {transactions}=useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
            <h1>Your Balance</h1>
            <h2>${total}</h2>
            {/* <username.Consumer>
                {
                    username => {
                        return (
                            <div>
                            <userid.Consumer>
                                {
                                    userid => {
                                        return (
                                            <div>
                                            <h3>the user id is {userid}</h3>
                                                <h3>UserName is "{username}"</h3>
                                            </div>
                                        )
                                    }
                                }
                            </userid.Consumer>
                            
                            
                                
                            </div>
                            )
                    }
                }
            </username.Consumer> */}
            

            </>
        );
}
export default Balance;