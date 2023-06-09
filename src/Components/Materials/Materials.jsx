import React from 'react'
import s from './../ContainerCSSModule/Container.module.css'
import MaterialsItem from "./MaterialsItem";
import ParamsViewContainer from "../ParamsView/ParamsViewContainer";
import Navbar from "../Navbar/Navbar";

function Materials(props) {
    let state = props.typesPage

    let updateMaterial = (price, selectedId, name) => {
        props.updateMaterial(price, selectedId, name);
    }
    return (
            <div className={s.typesLayer}>
                {state.materials.map(el => <MaterialsItem id={el.id} img={el.img} name={el.name} description={el.description}
                                                          price={el.price} materialSum={state.materialSum}
                                                          selectedId={state.selectedMaterialId} updateMaterial={updateMaterial}/>)}
            </div>
    )
}

export default Materials