import React from 'react';
import ParamsViewContainer from "./Components/ParamsView/ParamsViewContainer";
import Navbar from "./Components/Navbar/Navbar";

export const Layout = ({children}) => {
    return (
        <div className='app-wrapper'>
            <ParamsViewContainer/>
            <Navbar/>
            {children}
        </div>
    );
};
