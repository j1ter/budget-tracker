import React from "react";
import { useSelector } from "react-redux"; // Импортируем необходимый хук

const Remaining = () => {
    const expenses = useSelector(state => state.expenses); // Получаем список расходов из состояния Redux
    const budget = useSelector(state => state.budget); // Получаем бюджет из состояния Redux

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return(
        <div className={`alert ${alertType}`}>
            <span>Remaining: ₸{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
