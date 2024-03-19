import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // Импортируем необходимый хук
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState('name'); 
    const expenses = useSelector(state => state.expenses);
    const dispatch = useDispatch();

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const filteredExpenses = expenses.filter(expense => {
        return expense.name.toLowerCase().includes(filter.toLowerCase());
    });

    
    const sortedExpenses = [...filteredExpenses].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'cost') {
            return parseFloat(a.cost) - parseFloat(b.cost); 
        }
        return 0;
    });

    return(
        <div>
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filter by name..."
                className="form-control" 
            />
            <select value={sortBy} onChange={handleSortChange} className="form-select mt-3">
                <option value="name">Sort by Name</option>
                <option value="cost">Sort by Amount</option>
            </select>
            <ul className="list-group mt-3">
                {sortedExpenses.map(expense => (
                    <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
