import React from "react";
import {connect} from "react-redux";
import {addTaskAC, countAllSumAC} from "../../redux/types-reducer";
import Results from "./Results";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        countAllSum: () => {
            let action = countAllSumAC();
            dispatch(action);
        },

        addTask: (allSum, homeSelectedType, baseSelectedType, wallSelectedType, roofSelectedType, heatingSelectedType, windowSelectedName, flowSelectedName) => {
            let action = addTaskAC(allSum, homeSelectedType, baseSelectedType, wallSelectedType, roofSelectedType, heatingSelectedType, windowSelectedName, flowSelectedName);
            dispatch(action);
        }
    }
}

const ResultsContainer = connect(mapStateToProps, mapDispatchToProps)(Results);

export default ResultsContainer;