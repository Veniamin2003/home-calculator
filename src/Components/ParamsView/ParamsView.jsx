import React from 'react'
import s from './ParamsView.module.css'
import ParamsMain from "./ParamsViewMain/ParamsMain";
import ParamsChild from "./ParamsViewChild/ParamsChild";

function ParamsView(props) {
    let state = props.typesPage;
    return (
        <div className={s.allBlock}>
            <div className={s.mainBlock}>
                {state.stairsTypes.map(el => {
                    if (el.id === state.selectedStairsTypesId) {
                        return (<ParamsMain id={el.id} img={el.viewImg} descImg={el.img}/>)
                    }
                })}
            </div>
            <div className={s.childBlock}>
                <div className={s.childElem}>
                    {state.materials.map(el => {
                        if (el.id === state.selectedMaterialId) {
                            return (<ParamsChild id={el.id} img={el.viewImg} name={el.name}/>)
                        }
                    })}
                </div>

                <div className={s.childElem}>
                    {state.anderStage.map(el => {
                        if (el.id === state.selectedAnderStageId) {
                            return (<ParamsChild id={el.id} img={el.viewImg} name={el.name}/>)
                        }
                    })}
                </div>

                <div className={s.childElem}>
                    {state.roofType.roofTypeItems.map(el => {
                        if (el.id === state.selectedRoofTypeId) {
                            return (<ParamsChild id={el.id} img={el.viewImg} name={el.name}/>)
                        }
                    })}
                </div>

                <div className={s.childElem}>
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