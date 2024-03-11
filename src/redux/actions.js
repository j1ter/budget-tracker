// actions.js
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    payload: expense,
  });
  
  export const deleteExpense = (expenseId) => ({
    type: 'DELETE_EXPENSE',
    payload: expenseId,
  });
  
  export const setBudget = (budget) => ({
    type: 'SET_BUDGET',
    payload: budget,
  });
  