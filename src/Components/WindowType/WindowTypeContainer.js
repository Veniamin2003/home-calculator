import React from "react";
import {updateWindowTypeAC} from "../../redux/types-reducer";
import {connect} from "react-redux";
import WindowType from "./WindowType";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateWindowTypeId: (price, selectedId, name) => {
            let action = updateWindowTypeAC(price, selectedId, name);
            dispatch(action);
        }
    }
}

const WindowTypeContainer = connect(mapStateToProps, mapDispatchToProps) (WindowType);

export default WindowTypeContainer;