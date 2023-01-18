import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency,remaining, dispatch } = useContext(AppContext);
    const expenseTotal = useContext(AppContext).expenses.reduce((total, item) => {
    return (total += item.cost);
    }, 0);

    const handleChange = (e) => {
    const newBudget = e.target.value;
    if (newBudget > 20000) {
        alert('Cannot set budget over 20000');
    // } else if (newBudget < expenseTotal) {
        // alert('You cannot reduce the budget value lower than the spending');
    } else if (newBudget < remaining) {
        alert('The value cannot exceeds remaining funds ' + currency + remaining);
    }

      else {
        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    }
}

return (
    <div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
        <input type="number" className="form-control" placeholder="Enter new budget" onChange={handleChange} min="0" max="20000" step={10}/>
    </div>
);
}
export default Budget;
