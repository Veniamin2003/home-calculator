import React from "react";
import s from "./TaskItem.module.css"

function TasksItem(props) {
    return (
        <div key={props.id} className={s.task_item}>
            <h2>Заявка на расчет</h2>
            <div className={s.first_block}>
                <div className={s.child}>
                    <div><b>Тип дома:</b> {props.taskHomeType}</div>
                    <div><b>Фундамент:</b> {props.baseSelectedType}</div>
                </div>
                <div className={s.child}>
                    <div><b>Тип стен:</b> {props.wallSelectedType}</div>
                    <div><b>Покрыттие на крышу:</b> {props.roofSelectedType}</div>
                </div>
                <div className={s.child}>
                    <div><b>Напольное покрытие:</b> {props.flowSelectedName}</div>
                    <div><b>Тип окон:</b> {props.windowSelectedName}</div>
                </div>
                <div className={s.child}>
                    <div><b>Отопление:</b> {props.heatingSelectedType}</div>
                </div>
            </div>
            <div className={s.second__block}>
                <div className={s.child_second}><b>Общая примерная сумма:</b> {props.taskSum} рублей</div>
            </div>

        </div>)
}

export default TasksItem;