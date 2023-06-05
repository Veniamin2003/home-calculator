import React from "react";
import {connect} from "react-redux";
import ParamsView from "./ParamsView";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}
let mapDispatchToProps = (dispatch) => {

}

const ParamsViewContainer = connect(mapStateToProps, mapDispatchToProps) (ParamsView);

export default ParamsViewContainer;