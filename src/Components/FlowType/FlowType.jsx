import React from 'react'
import s from './../ContainerCSSModule/Container.module.css'
import FlowTypeItem from "./FlowTypeItem";
import FlowTypes from "../../HomeData/flow-types.json"

function FlowType(props) {
    let state = props.typesPage

    let updateFlowType = (price, selectedId, name) => {
        props.updateFlowTypeId(price, selectedId, name);
    }
    return (
        <div>
            <div className={s.typesLayer}>
                {/*{state.flows.map(el => <FlowTypeItem id={el.id} img={el.img} name={el.name} description={el.description}
                                                       price={el.price} flowTypeSum={state.flowTypeSum}
                                                       selectedId={state.selectedFlowTypeId} updateFlowType={updateFlowType}/>)}*/}

                {FlowTypes.flowTypes.map(el => <FlowTypeItem id={el.id} img={el.img} name={el.name} description={el.description}
                                                     price={el.price} flowTypeSum={state.flowTypeSum}
                                                     selectedId={state.selectedFlowTypeId} updateFlowType={updateFlowType}/>)}
            </div>

        </div>
    )
}

export default FlowType;