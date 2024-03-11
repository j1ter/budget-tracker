import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Импортируем необходимые хуки
import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';
import { setBudget } from "../redux/actions"; // Импортируем действие для установки бюджета

const Budget = () => {
    const budget = useSelector(state => state.budget); // Получаем бюджет из состояния Redux
    const dispatch = useDispatch(); // Получаем функцию dispatch из хука useDispatch

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = (value) => {
        dispatch(setBudget(value)); // Отправляем действие setBudget с новым значением бюджета в хранилище
        setIsEditing(false);
    }

    return(
        <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
            {isEditing ? (
                <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
                ) : (
                    <ViewBudget handleEditClick={handleEditClick} budget={budget} />
                )
            }
        </div>
    );
};

export default Budget;
