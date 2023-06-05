import React from "react";
import {updateHeatingAC} from "../../redux/types-reducer";
import {connect} from "react-redux";
import Heating from "./Heating";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateHeating: (price, selectedId, name) => {
            let action = updateHeatingAC(price, selectedId, name);
            dispatch(action);
        }
    }
}

const HeatingContainer = connect(mapStateToProps, mapDispatchToProps) (Heating);

export default HeatingContainer;