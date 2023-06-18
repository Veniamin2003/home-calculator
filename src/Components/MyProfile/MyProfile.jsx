import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import s from "./MyProfile.module.css"


function MyProfile(props) {
    const navigate = useNavigate();

    let state = props.typesPage;

    return (
        <div className={s.profile__container}>
            <div className={s.profile__block}>
                <div className={s.content}>
                    <div className={s.userData}>
                        <div>
                            <p>Имя: {state.nameAU}</p>
                            <p>Фамилия: {state.lnameAU}</p>
                            <p>Логин: {state.loginAU}</p>
                            <p>Пароль: {state.passwordAU} </p>
                        </div>

                    </div>
                    <div className={s.btn__block}>
                        <button className={s.btn}>Сменить пароль</button>
                        <Link to={"/login"} className={s.btn2}>Выйти</Link>
                    </div>
                    <div>
                        <img src={"https://static.tildacdn.com/tild3165-3535-4963-b163-356635373535/e3721ddd6a2db50936b2.png"}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyProfile;