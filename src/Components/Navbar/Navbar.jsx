import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item1}>
                <NavLink to='/stair-types' className={navData => navData.isActive ? s.active : s.item}>План дома</NavLink>
            </div>

            <div className={s.item1}>
                <NavLink to='/stair-material' className={navData => navData.isActive ? s.active : s.item}>Фундамент</NavLink>
            </div>

            <div className={s.item1}>
                <NavLink to='/ander-stage-type' className={navData => navData.isActive ? s.active : s.item}>Стены</NavLink>
            </div>

            <div className={s.item1}>
                <NavLink to='/paint-type' className={navData => navData.isActive ? s.active : s.item}>Крыша</NavLink>
            </div>

            <div className={s.item1}>
                <NavLink to='/heating' className={navData => navData.isActive ? s.active : s.item}>Отопление</NavLink>
            </div>

            <div className={s.item1}>
                <NavLink to='/results' className={navData => navData.isActive ? s.active : s.item}>Посчитать результаты</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;