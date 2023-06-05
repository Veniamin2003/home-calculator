/*
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavCalc from "./NavTop/NavCalc";
import ParamsViewContainer from "./ParamsView/ParamsViewContainer";
import Navbar from "./Navbar/Navbar";
import StairsTypesContainer from "./StairsTypes/StairsTypesContainer";
import MaterialsContainer from "./Materials/MaterialsContainer";
import AnderStageContainer from "./AnderStage/AnderStageContainer";
import FlowTypeContainer from "./FlowType/FlowTypeContainer";
import HeatingContainer from "./Heating/HeatingContainer";
import ResultsContainer from "./Results/ResultsContainer";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";

function Calculator(props) {
    return (
        <BrowserRouter>
            <NavCalc />
            <div className='app-wrapper'>
                <ParamsViewContainer />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/'
                               element={<StairsTypesContainer/>}/>

                        <Route path='/stair-types'
                               element={<StairsTypesContainer/>}/>

                        <Route path='/stair-material'
                               element={<MaterialsContainer />}/>

                        {<Route path='/ander-stage-type'
                                element={<AnderStageContainer />}/>}

                        <Route path='/paint-type'
                               element={<FlowTypeContainer />}/>

                        <Route path='/heating'
                               element={<HeatingContainer />}/>

                        <Route path='/results'
                               element={<ResultsContainer />}/>

                        <Route path='/form'
                               element={<Form />}/>
                    </Routes>
                </div>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default Calculator;*/
