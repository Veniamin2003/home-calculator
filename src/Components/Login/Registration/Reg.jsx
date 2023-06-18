import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import s from "./Reg.module.css"


function Reg(props) {
    let isOriginal = false;
    const navigate = useNavigate();

    let state = props.typesPage;

    let users = state.users;
    let name = React.createRef();
    let lname = React.createRef();
    let login = React.createRef();
    let password = React.createRef();

    const handleClick = () => {
        if(name.current.value !== "" && lname.current.value !== "" && login.current.value !== "" && password.current.value !== "") {
            for (const user of users) {
                if (user.login !== login.current.value) {
                    isOriginal = true;
                } else {
                    isOriginal = false;
                    break
                }
            }

            if (isOriginal) {
                navigate('/');
                alert("Вы успешно зарегистрированы!");
                let nameUser = name.current.value;
                let lnameUser = lname.current.value;
                let loginUser = login.current.value;
                let passwordUser = password.current.value;

                props.addUser(nameUser, lnameUser, loginUser, passwordUser);
            } else {
                alert("Пользователь с таким логином уже есть");
            }
        }
        else {
            alert("Заполните все поля!");
        }
    }
    return (
        <div className={s.regContainer}>
            <div className={s.regForm}>
                <div className={s.content}>
                    <h2>Регистрация</h2>
                    <div>
                        <div>
                            <p>Ваше имя</p>
                            <textarea ref={name}/>
                        </div>
                        <div>
                            <p>Фаша фамилия</p>
                            <textarea ref={lname}/>
                        </div>
                        <div>
                            <p>Логин</p>
                            <textarea ref={login}/>
                        </div>
                        <div>
                            <p>Пароль</p>
                            <textarea ref={password}/>
                        </div>
                    </div>
                    <div>
                        <button className={s.btn} onClick={handleClick} type="button">Зарегистрироваться</button>
                    </div>
                    <Link to={"/"} className={s.btn} type="button">Назад</Link>
                </div>
            </div>
        </div>

    )
}

export default Reg;