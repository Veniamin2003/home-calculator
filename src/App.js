import './App.css';
import StairsTypesContainer from "./Components/StairsTypes/StairsTypesContainer";
import MaterialsContainer from "./Components/Materials/MaterialsContainer";
import ResultsContainer from "./Components/Results/ResultsContainer";
import AnderStageContainer from "./Components/AnderStage/AnderStageContainer";
import PaintTypeContainer from "./Components/PaintType/PaintTypeContainer";
import HeatingContainer from "./Components/Heating/HeatingContainer";
import ParamsViewContainer from "./Components/ParamsView/ParamsViewContainer";
import WindowTypeContainer from "./Components/WindowType/WindowTypeContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Form from './Components/Form/Form';
import Footer from "./Components/Footer/Footer";
import NavCalc from "./Components/NavTop/NavCalc";
import FlowTypeContainer from "./Components/FlowType/FlowTypeContainer";


function App(props) {
    debugger
    return (
        <BrowserRouter>
            <NavCalc />
            <div className='app-wrapper'>
                {/*<StairTypeViewContainer />*/}

                <ParamsViewContainer />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/'
                               element={<StairsTypesContainer/>}/>

                        <Route path='/home-types'
                               element={<StairsTypesContainer/>}/>

                        <Route path='/home-material'
                               element={<MaterialsContainer />}/>

                        {<Route path='/wall-type'
                                element={<AnderStageContainer />}/>}

                        <Route path='/roof-type'
                               element={<PaintTypeContainer />}/>

                        <Route path='/heating'
                               element={<HeatingContainer />}/>

                        <Route path='/windows'
                               element={<WindowTypeContainer />}/>

                        <Route path='/flow'
                               element={<FlowTypeContainer />}/>

                        <Route path='/results'
                               element={<ResultsContainer />}/>

                        <Route path='/form'
                               element={<Form />}/>
                    </Routes>
                </div>
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
