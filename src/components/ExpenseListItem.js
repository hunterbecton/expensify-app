import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({description, amount, createdAt, id, dispatch}) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{ description }</h3></Link>
        <p>{ amount } - { createdAt }</p>
    </div>
);

//Nothing is needed form the state, which is why we don't pass anything into the connect function
export default ExpenseListItem;