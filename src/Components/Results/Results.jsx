import React from 'react'
import icon from '../../Images/StairsTypes/Result/icon.png'
import s from './Results.module.css'
import ResultsView from "./ResultsView";


function Results(props) {
    let state = props.typesPage

    let a = 1

    let countAllSum = () => {
        debugger
        props.countAllSum();
    }
    return (
        <div className={s.typesLayer}>
            <div className={s.btnBlock}>
                <button className="btn btn-primary-two" onClick={countAllSum}>Рассчитать стоимость монтажа</button>
            </div>

                <ResultsView state={props.typesPage}/>
        </div>
    )
}

export default Results