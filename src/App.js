import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add code to import the components
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining'

const App = () => {
    const expenseTotal =  ExpenseTotal;
    const [currency, setCurrency] = useState('£');

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    }
    return (
        <AppProvider>
            <div className='container'>
            <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget expenseTotal={expenseTotal} />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                    <label>Currency :
                    <select className='form-control' value={currency} onChange={handleCurrencyChange}>
                        <option value="£">£ Pound</option>
                        <option value="$">$ Dollar</option>
                        <option value="€">€ Euro</option>
                        <option value="₹">₹ Ruppee</option>
                    </select>
                    </label>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>            
                </div>
        </AppProvider>
    );
};
export default App;
