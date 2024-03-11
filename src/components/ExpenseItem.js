import React from "react";
import { useDispatch } from "react-redux"; // Импортируем необходимый хук
import { TiDelete } from 'react-icons/ti';
import { deleteExpense } from "../redux/actions"; // Импортируем действие для удаления расхода

const ExpenseItem = (props) => {
    const dispatch = useDispatch(); // Получаем функцию dispatch из хука useDispatch

    const handleDeleteExpense = () => {
        dispatch(deleteExpense(props.id)); // Отправляем действие deleteExpense с id расхода в хранилище
    };

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className='badge text-bg-success me-3'>
                    ₸{props.cost}
                </span>
                <TiDelete size='24px' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;
