import React from 'react'
import icon from '../../Images/StairsTypes/Result/icon.png'
import s from './Results.module.css'
import Contact from "../Contact/Contact";


function ResultsView(props) {
    let state = props.state
    let text = `Примерная стоимость моего дома = ${state.allSum},\n 
    Параметры: 
    План дома: ${state.homeSelectedType},
    Фундамент: ${state.baseSelectedType},
    Стены: ${state.wallSelectedType},
    Крыша: ${state.roofSelectedType},
    Отопление: ${state.heatingSelectedType},
    Окна: ${state.windowSelectedName},
    Напольное покрытие: ${state.flowSelectedName},
    `

    let addTask = (allSum, homeSelectedType, baseSelectedType) => {
        props.addTask(allSum, homeSelectedType, baseSelectedType);
    }

    return (
        <div className={s.typesLayer}>
            <Contact text={text} addTask={addTask}/>
        </div>

    )
}

export default ResultsView