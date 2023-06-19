import React from 'react'
import s from './ParamsView.module.css'
import ParamsMain from "./ParamsViewMain/ParamsMain";
import ParamsChild from "./ParamsViewChild/ParamsChild";
import HomeTypes from "../../HomeData/home-types.json"

function ParamsView(props) {
    let state = props.typesPage;
    return (
        <div className={s.allBlock}>
            <div className={s.mainBlock}>
                <h3>Тип вашего дома</h3>
                {HomeTypes.homeTypes.map(el => {
                    if (el.id === state.selectedStairsTypesId) {
                        return (<ParamsMain id={el.id} img={el.viewImg} descImg={el.img}/>)
                    }
                })}
            </div>
            <div className={s.childBlock}>
                <div className={s.childElem}>
                    <h3>Тип фундамента</h3>
                    {state.materials.map(el => {
                        if (el.id === state.selectedMaterialId) {
                            return (<ParamsChild id={el.id} img={el.viewImg} name={el.name}/>)
                        }
                    })}
                </div>

                <div className={s.childElem}>
                    <h3>Материал стен</h3>
                    {state.anderStage.map(el => {
                        if (el.id === state.selectedAnderStageId) {
                            return (<ParamsChild id={el.id} img={el.viewImg} name={el.name}/>)
                        }
                    })}
                </div>

                <div className={s.childElem}>
                    <h3>Покрытие на крышу</h3>
                    {state.roofType.roofTypeItems.map(el => {
                        if (el.id === state.selectedRoofTypeId) {
                            return (<ParamsChild id={el.id} img={el.viewImg} name={el.name}/>)
                        }
                    })}
                </div>

                <div className={s.childElem}>
                    <h3>Отопление</h3>
                    {state.heatingType.map(el => {
                        if (el.id === state.selectedHeatingId) {
                            return (<ParamsChild id={el.id} img={el.viewImg} name={el.name}/>)
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default ParamsView;