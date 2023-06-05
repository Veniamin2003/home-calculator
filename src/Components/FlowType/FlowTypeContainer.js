import React from "react";
import {updateFlowTypeAC} from "../../redux/types-reducer";
import {connect} from "react-redux";
import FlowType from "./FlowType";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateFlowTypeId: (price, selectedId, name) => {
            let action = updateFlowTypeAC(price, selectedId, name);
            dispatch(action);
        }
    }
}

const FlowTypeContainer = connect(mapStateToProps, mapDispatchToProps) (FlowType);

export default FlowTypeContainer;