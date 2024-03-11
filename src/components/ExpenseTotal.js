import React from "react";
import { useSelector } from "react-redux"; // Импортируем необходимый хук

const ExpenseTotal = () => {
    const expenses = useSelector(state => state.expenses); // Получаем список расходов из состояния Redux

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    return(
        <div className="alert alert-primary">
            <span>Spent so far: ₸{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
