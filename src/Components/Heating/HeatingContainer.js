import React from "react";
import {updateHeatingAC} from "../../redux/types-reducer";
import {connect} from "react-redux";
import Heating from "./Heating";

let mapStateToProps = (state) => {
    debugger
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateHeating: (price, selectedId) => {
            debugger
            let action = updateHeatingAC(price, selectedId);
            dispatch(action);
        }
    }
}

const HeatingContainer = connect(mapStateToProps, mapDispatchToProps) (Heating);

export default HeatingContainer;