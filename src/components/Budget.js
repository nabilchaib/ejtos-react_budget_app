import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import expenseTotal from './ExpenseTotal';

const Budget = ({expenseTotal}) => {
    const { budget, dispatch } = useContext(AppContext);
    const handleChange = (e) => {
        const newBudget = e.target.value;
        if (isNaN(newBudget)) {
            alert('Please enter a valid number');
        } else if (newBudget > 20000) {
            alert('Cannot set budget over 20000');
        } else if (newBudget < expenseTotal) {
            alert('You cannot reduce the budget value lower than the spending');
        } else {
            dispatch({ type: 'SET_BUDGET', payload: newBudget });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" className="form-control" placeholder="Enter new budget" onChange={handleChange} min="0" max="20000" step={10}/>
        </div>
    );
};

export default Budget;
