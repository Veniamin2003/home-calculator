import React from 'react'
import icon from '../../Images/StairsTypes/Result/icon.png'
import s from './Results.module.css'


function ResultsView(props) {
    debugger
    let state = props.state

    return (
        <div className={s.typesLayer}>
            <div>
                <p>Основываясь на выбранные вами параметры, была расчитана примерная стоимость постройки вашего дома.
                    При расчете были учтены основные парметры. Для уточнения суммы
                    и тонкостей расчета вам следует связаться с нами любым удобным для вас способом.</p>
                <p>При расчете были учтены: </p>
                <ul>
                    <li>Тип фундамента</li>
                    <li>Материал стен</li>
                    <li>Материал покрытия крыши</li>
                    <li>Отопление в доме</li>
                </ul>
            </div>
            <div><h2>Итоговая стоимость = {state.allSum}</h2></div>
        </div>
    )
}

export default ResultsView