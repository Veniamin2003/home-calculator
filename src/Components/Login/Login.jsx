import React from 'react'
import s from "./Login.module.css"
/*import {Link, Navigate, Route, Router, Routes} from "react-router-dom";*/
import {Link, useNavigate} from 'react-router-dom';


function Login(props) {
    const navigate = useNavigate();

    let state = props.typesPage;

    console.log(state.users)
    let users = state.users;
    let login = React.createRef();
    let password = React.createRef();

    const handleClick = () => {
        let newList = [];

        let isLogin = false;
        for (const user of users)
        {
            if(user.login === login.current.value && user.password === password.current.value)
            {
                let id = user.id;
                let name = user.name;
                let lname = user.lname;
                let login = user.login;
                let password = user.password;

                props.updateActiveUser(id, name, lname, login, password);
                navigate('/calc');
                isLogin = true;
                break;
            }
        }

        if(!isLogin) {
            alert("Неправильный логин или пароль")
        }
    }
    return (
        <div className={s.loginContainer}>
            <div className={s.loginForm}>
                <div className={s.content}>
                    <h2>Авторизация</h2>
                    <div>
                        <div>
                            <p>Логин</p>
                            <textarea ref={login}/>
                        </div>
                        <div>
                            <p>Пароль</p>
                            <textarea ref={password}/>
                        </div>
                        <div className={s.btn__block}>
                            <button className={s.btn} onClick={handleClick}>Войти</button>

                            <Link className={s.btn2} to={"/registration"}>Зарегестрироваться</Link>
                        </div>



                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;