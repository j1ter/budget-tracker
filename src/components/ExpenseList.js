import React from "react";
import { useSelector } from "react-redux"; // Импортируем необходимый хук
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = useSelector(state => state.expenses); // Получаем список расходов из состояния Redux

    return(
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    );
};

export default ExpenseList;
