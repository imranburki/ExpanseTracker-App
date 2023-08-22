// JavaScript source code
import React, { useContext } from 'react';
import Balance from './Balance.js';
import { username, userid } from '../App';

function Header() {
    const name = useContext(username);
    const id = useContext(userid);
    return (
        <div>
            <h1>Expance Tracker</h1>
            
            {/* <h2>i am using usecontext</h2>
            <Balance />
            <h3>Now using useContext</h3>
            <table>
                <tr>
                <th>User ID</th>
                    <th>userName</th>
                </tr>
                <tr>
                    <td>    {name}</td>
                    <td>{id}</td>
                </tr>
            </table> */}
            </div>
        );
}
export default Header;