import React from "react";
import {connect} from "react-redux";
import MyProfile from "./MyProfile";

let mapStateToProps = (state) => {
    return {
        typesPage: state.typesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addUser: () => {
        }
    }
}

const MyProfileContainer = connect(mapStateToProps, mapDispatchToProps) (MyProfile);

export default MyProfileContainer;