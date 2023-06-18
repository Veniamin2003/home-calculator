import React, {useRef, useState} from "react"
import {useNavigate} from 'react-router-dom';

import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {FaTelegramPlane} from "react-icons/fa"
import {ImWhatsapp} from "react-icons/im"
import emailjs from "emailjs-com"
import {NavLink} from "react-router-dom";
import Modal from "../Modal/Modal";

const Contact = (props) => {
    let state = props.state
    const [modalActive, setModalActive] = useState(false);

    const form = useRef();

    const navigate = useNavigate();

    let textTask = `Примерная стоимость моего дома = ${state.allSum},\n 
    Параметры: 
    План дома: ${state.homeSelectedType},
    Фундамент: ${state.baseSelectedType},
    Стены: ${state.wallSelectedType},
    Крыша: ${state.roofSelectedType},
    Отопление: ${state.heatingSelectedType},
    Окна: ${state.windowSelectedName},
    Напольное покрытие: ${state.flowSelectedName},`

    let allSum = state.allSum;
    let homeSelectedType = state.homeSelectedType;
    let baseSelectedType = state.baseSelectedType;
    let wallSelectedType = state.wallSelectedType;
    let roofSelectedType = state.roofSelectedType;
    let heatingSelectedType = state.heatingSelectedType;
    let windowSelectedName = state.windowSelectedName;
    let flowSelectedName = state.flowSelectedName;

    let addTask = () => {
        props.addTask(allSum, homeSelectedType, baseSelectedType, wallSelectedType, roofSelectedType, heatingSelectedType, windowSelectedName, flowSelectedName);
    }

    let test = () => {
        console.log(state.tasks);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        //emailjs.sendForm('service_w6mi3gs', 'template_lrpzhbf', form.current, 'kwzRAgWDedV5MOCo-') // на veniapetrov941@gmail.com
        //emailjs.sendForm('service_t5e8k15', 'template_ctpsrui', form.current, 'lTZqkk2nNYH8Rcza4') // на info@veniamin-petrov.ru
        emailjs.sendForm('service_ly49in9', 'template_rlamh2o', form.current, '96-gx2KpHYsLOx6P-') // на krasilnikovvita3@gmail.com

        e.target.reset();
        setModalActive(true);

        addTask();
    };

    return (
        <section id="contact" className="contact">
            <div className="header__text__fridge">
                <h3>Оставьте заявку на полный расчет прямо сейчас</h3>
            </div>

            <div className="container contact__container">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Ваше полное имя" required />
                    <input type="phone" name="phone" placeholder="Ваш номер телефона" required />
                    <textarea name="message" rows="7" placeholder="Опишите вашу поломку" value={textTask} required />
                    <button type="submit" className="btn btn-primary-two">Отправить сообщение</button>
                </form>
            </div>

            <Modal active={modalActive} setActive={setModalActive}/>
        </section>
    )
}

export default Contact