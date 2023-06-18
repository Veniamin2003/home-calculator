import React from "react";
import {connect} from "react-redux";
import Tasks from "./Tasks";
import TaskCheck from "./TaskCheck";
import TaskBlock from "./TaskBlock/TaskBlock";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

function IsLogged(props) {
    let state = props.typesPage;
    const isLoggedIn = state.isLogin;
    if (isLoggedIn) {
        return <Tasks state={state}/>
    }
    return <TaskBlock/>
}

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(IsLogged);

export default TasksContainer;