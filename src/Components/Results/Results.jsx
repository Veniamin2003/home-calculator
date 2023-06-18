import React from 'react'
import icon from '../../Images/StairsTypes/Result/icon.png'
import s from './Results.module.css'
import ResultsView from "./ResultsView";
import Contact from "../Contact/Contact";


function Results(props) {
    let state = props.typesPage

    let a = 1

    let countAllSum = () => {
        props.countAllSum();
    }

    let addTask = (allSum, homeSelectedType, baseSelectedType, wallSelectedType, roofSelectedType, heatingSelectedType, windowSelectedName, flowSelectedName) => {
        props.addTask(allSum, homeSelectedType, baseSelectedType, wallSelectedType, roofSelectedType, heatingSelectedType, windowSelectedName, flowSelectedName);
    }
    return (
        <div className={s.typesLayer}>
            <div className={s.btnBlock}>
                <button className="btn btn-primary-two" onClick={countAllSum}>Рассчитать стоимость монтажа</button>
            </div>
            <Contact state={props.typesPage} addTask={addTask}/>

        </div>
    )
}

export default Results