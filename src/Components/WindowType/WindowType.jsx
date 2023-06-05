import React from 'react'
import s from './../ContainerCSSModule/Container.module.css'
import WindowTypeItem from "./WindowTypeItem";



function WindowType(props) {
    let state = props.typesPage

    let updateWindowType = (price, selectedId, name) => {
        props.updateWindowTypeId(price, selectedId, name);
    }
    return (
        <div>
            <div className={s.typesLayer}>
                {state.windows.map(el => <WindowTypeItem id={el.id} img={el.img} name={el.name} description={el.description}
                                                                        price={el.price} windowTypeSum={state.windowTypeSum}
                                                                        selectedId={state.selectedWindowTypeId} updateWindowType={updateWindowType}/>)}
            </div>

        </div>
    )
}

export default WindowType;