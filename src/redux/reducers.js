// reducers.js
const initialState = {
    budget: 5000,
    expenses: [
      { id: 12, name: 'shopping', cost: 40 },
      { id: 13, name: 'holiday', cost: 400 },
      { id: 14, name: 'car service', cost: 50 },
    ],
  };
  
  const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
        };
      case 'DELETE_EXPENSE':
        return {
          ...state,
          expenses: state.expenses.filter(
            (expense) => expense.id !== action.payload
          ),
        };
      case 'SET_BUDGET':
        return {
          ...state,
          budget: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default appReducer;
  