import React from 'react'
import TasksItems from "./TasksItems";
import s from "./Task.module.css"

function Tasks(props) {
    /*let mocData = [
        {   id: 1,
            taskHomeType: "Тип дома",
            baseSelectedType: "Тип бетона",
            wallSelectedType: "Тип стен",
            roofSelectedType: "Тип крыши",
            heatingSelectedType: "Тип отопления",
            windowSelectedName: "Тип окон",
            flowSelectedName: "Тип пола",
            taskSum: "Сумма общая итог",
        },
        {   id: 1,
            taskHomeType: "Тип дома",
            baseSelectedType: "Тип бетона",
            wallSelectedType: "Тип стен",
            roofSelectedType: "Тип крыши",
            heatingSelectedType: "Тип отопления",
            windowSelectedName: "Тип окон",
            flowSelectedName: "Тип пола",
            taskSum: "Сумма общая итог",
        },
        {   id: 2,
            taskHomeType: "Тип дома",
            baseSelectedType: "Тип бетона",
            wallSelectedType: "Тип стен",
            roofSelectedType: "Тип крыши",
            heatingSelectedType: "Тип отопления",
            windowSelectedName: "Тип окон",
            flowSelectedName: "Тип пола",
            taskSum: "Сумма общая итог",
        },
        {   id: 1,
            taskHomeType: "Тип дома",
            baseSelectedType: "Тип бетона",
            wallSelectedType: "Тип стен",
            roofSelectedType: "Тип крыши",
            heatingSelectedType: "Тип отопления",
            windowSelectedName: "Тип окон",
            flowSelectedName: "Тип пола",
            taskSum: "Сумма общая итог",
        },
    ]*/
    let state = props.state;
    return (
        <div className={s.task__container}>
            <div className={s.name_block}>
                <h2>Мои заявки</h2>
            </div>
            <div>
                {state.tasks.map(el => <TasksItems
                    id={el.id}
                    taskHomeType={el.taskHomeType}
                    baseSelectedType={el.baseSelectedType}
                    wallSelectedType={el.wallSelectedType}
                    roofSelectedType={el.roofSelectedType}
                    heatingSelectedType={el.heatingSelectedType}
                    windowSelectedName={el.windowSelectedName}
                    flowSelectedName={el.flowSelectedName}
                    taskSum={el.taskSum}/>)}
            </div>
        </div>
    )
}

export default Tasks;