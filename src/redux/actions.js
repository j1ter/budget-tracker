// actions.js
import { v4 as uuidv4 } from 'uuid';

export const addExpense = (expense) => {
    const currentTime = new Date().toLocaleString();
    return {
        type: 'ADD_EXPENSE',
        payload: { ...expense, id: uuidv4(), time: currentTime }
    };
};
  
  export const deleteExpense = (expenseId) => ({
    type: 'DELETE_EXPENSE',
    payload: expenseId,
  });
  
  export const setBudget = (budget) => ({
    type: 'SET_BUDGET',
    payload: budget,
  });

  export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter
});

export const clearFilter = () => ({
    type: 'CLEAR_FILTER'
});

export const setSortBy = (sortBy) => ({
    type: 'SET_SORT_BY',
    payload: sortBy
});

export const saveExpensesToLocalStorage = () => ({
    type: 'SAVE_EXPENSES_TO_LOCAL_STORAGE'
});
  