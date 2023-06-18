import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {updateActiveUserAC, updateIsLoginAC} from "../../redux/types-reducer";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateIsLogin: (isLogin) => {
            let action = updateIsLoginAC(isLogin);
            dispatch(action);
        },
        updateActiveUser: (id, name, lname, login, password) => {
            let action = updateActiveUserAC(id, name, lname, login, password);
            dispatch(action);
        },
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps) (Login);

export default LoginContainer;