import React from 'react'
import s from './../ContainerCSSModule/Container.module.css'
import PaintTypeItem from "./PaintTypeItem";



function PaintType(props) {
    let state = props.typesPage

    let updatePaintType = (price, selectedId, name) => {
        props.updatePaintTypeId(price, selectedId, name);
    }
    return (
        <div>
            <div className={s.typesLayer}>
                {state.roofType.roofTypeItems.map(el => <PaintTypeItem id={el.id} img={el.img} name={el.name} description={el.description}
                                                          price={el.price} paintTypeSum={state.roofTypeSum}
                                                          selectedId={state.selectedRoofTypeId} updatePaintType={updatePaintType}/>)}
            </div>

        </div>
    )
}

export default PaintType;