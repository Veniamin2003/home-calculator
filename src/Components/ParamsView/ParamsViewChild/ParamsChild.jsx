import s from "./ParamsChild.module.css";
import React from "react";

const ParamsChild = (props) => {
    return (

        <div key={props.id} className={s.paramChildItem}>
            <div className={s.paramChildElement}>
                <img src={props.img}/>
            </div>
            <div className={s.paramChildBack}>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default ParamsChild;