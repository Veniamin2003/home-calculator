import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/calc/home-types' className={navData => navData.isActive ? s.active : s.item}><div className={s.item1}>План дома</div></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/calc/home-material' className={navData => navData.isActive ? s.active : s.item}><div className={s.item1}>Фундамент</div></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/calc/wall-type' className={navData => navData.isActive ? s.active : s.item}><div className={s.item1}>Стены</div></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/calc/roof-type' className={navData => navData.isActive ? s.active : s.item}><div className={s.item1}>Крыша</div></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/calc/heating' className={navData => navData.isActive ? s.active : s.item}><div className={s.item1}>Отопление</div></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/calc/windows' className={navData => navData.isActive ? s.active : s.item}><div className={s.item1}>Окна(доп)</div></NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/calc/flow' className={navData => navData.isActive ? s.active : s.item}><div className={s.item1}>Напольное покрытие(доп)</div></NavLink>
            </div>

            <div className={s.item} >
                <NavLink to='/calc/results' className={navData => navData.isActive ? s.active : s.item}><div className={s.item1}>Посчитать результаты</div></NavLink>
            </div>
        </nav>
    )
}

export default Navbar;