import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavCalc from "./Components/NavTop/NavCalc";
import React from "react";
import HomeTypesPage from "./Pages/HomeTypesPage";
import BaseTypesPage from "./Pages/BaseTypesPage";
import WallTypesPage from "./Pages/WallTypesPage";
import RoofTypesPage from "./Pages/RoofTypesPage";
import HeatingTypesPage from "./Pages/HeatingTypesPage";
import WindowTypesPage from "./Pages/WindowTypesPage";
import FlowTypesPage from "./Pages/FlowTypesPage";
import ResultTypesPage from "./Pages/ResultTypesPage";
import Login from "./Components/Login/Login";
import TasksContainer from "./Components/Tasks/TasksContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import RegContainer from "./Components/Login/Registration/RegContainer";
import MyProfileContainer from "./Components/MyProfile/MyProfileContainer";

function App(props) {
    return (
        <BrowserRouter>
            <NavCalc />
                <div>
                    <Routes>
                        <Route path='/'
                               element={<LoginContainer/>}/>
                        <Route path='/login'
                               element={<LoginContainer/>}/>

                        <Route path='/registration'
                               element={<RegContainer/>}/>

                        <Route path='/profile'
                               element={<MyProfileContainer/>}/>

                        <Route path='/my-tasks'
                               element={<TasksContainer/>}/>

                        <Route path='/calc'
                               element={<HomeTypesPage/>} />

                        <Route path='/calc/home-types'
                               element={<HomeTypesPage/>}/>

                        <Route path='/calc/home-material'
                               element={<BaseTypesPage/>}/>

                        {<Route path='/calc/wall-type'
                                element={<WallTypesPage/>}/>}

                        <Route path='/calc/roof-type'
                               element={<RoofTypesPage/>}/>

                        <Route path='/calc/heating'
                               element={<HeatingTypesPage/>}/>

                        <Route path='/calc/windows'
                               element={<WindowTypesPage/>}/>

                        <Route path='/calc/flow'
                               element={<FlowTypesPage/>}/>

                        <Route path='/calc/results'
                               element={<ResultTypesPage/>}/>


                    </Routes>
                </div>
            <Footer />
        </BrowserRouter>


        /*<div>
            <StairsTypesContainer/>
            <MaterialsContainer />
            <AnderStageContainer />
            <CountStagesContainer />
            <FlowTypeContainer />
            <ResultsContainer />
        </div>*/
    );
}

export default App;
