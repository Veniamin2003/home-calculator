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
    return (
        <div className={s.typesLayer}>
            {/*<div className={s.description}>
                <p>Размеры конструкции: Высота - {state.stairsHeight}, Ширина - {state.stairsWidth}</p>
                <p>Количество ступеней ≈ {state.countStages}</p>
                <p>Высота проема между ступенями ≈ 14 см</p>
            </div>
            <div className={s.price}>
                <p>
                    Примерная стоимость Вашей лестницы = {state.allSum}
                </p>
            </div>*/}

            <Contact text={text}/>
        </div>

    )
}

export default ResultsView