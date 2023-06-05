import s from "./ParamsMain.module.css";
import React from "react";

const ParamsMain = (props) => {
    return (
        <div key={props.id} className={s.paramMainItem}>
            <div className={s.paramMainElement}>
              <img src={props.img}/>
            </div>
        </div>
    )
}

export default ParamsMain;