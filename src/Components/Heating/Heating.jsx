import React from 'react'
import s from './../ContainerCSSModule/Container.module.css'
import HeatingItem from "./HeatingItem";

function Heating(props) {
    debugger
    let state = props.typesPage

    let updateHeating = (price, selectedId) => {
        debugger
        props.updateHeating(price, selectedId);
    }
    return (
        <div className={s.typesLayer}>
            {state.heatingType.map(el => <HeatingItem id={el.id} img={el.img} name={el.name} description={el.description}
                                                    price={el.price} heatingSum={state.heatingSum}
                                                    selectedId={state.selectedHeatingId} updateHeating={updateHeating}/>)}
        </div>
    )
}

export default Heating