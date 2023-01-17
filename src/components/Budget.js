import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const handleChange = (e) => {
        const newBudget = e.target.value;
        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" className="form-control" placeholder="Enter new budget" onChange={handleChange} />
        </div>
    );
};

export default Budget;
