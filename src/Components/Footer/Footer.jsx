import React from "react"
import './footer.css'
import {MdOutlineEmail} from "react-icons/md"
import {FaTelegramPlane} from "react-icons/fa"
import {ImWhatsapp} from "react-icons/im"
import {FiPhoneOutgoing} from "react-icons/fi"
import {CgSmartHomeRefrigerator} from "react-icons/cg";
import {BsYoutube} from "react-icons/bs"
import {BsTelegram} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {SlSocialVkontakte} from "react-icons/sl"
import {GiWoodPile} from "react-icons/gi";
import img from "../../Images/icons8-white.png"

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                {/*<a href="#" className="footer__logo">КАЛЬКУЛЯТОР ДОМА</a>

                <ui className="permalinks">
                    <li><a href="#">Домой</a></li>
                    <li><a href="#">О компании</a></li>
                    <li><a href="#">Мой опыт</a></li>
                    <li><a href="#">Мои навыки</a></li>
                    <li><a href="#">Портфолио</a></li>
                    <li><a href="#">Отзывы</a></li>
                    <li><a href="#">Контакты</a></li>
                </ui>

                <div className="footer__social">
                    <a href="mailto:resume@veniamin-petrov.ru"><MdOutlineEmail /></a>
                    <a href="https://msngr.link/wa/79925036401>"><ImWhatsapp /></a>
                    <a href="https://msngr.link/tg/@spainvenk"><FaTelegramPlane /></a>
                </div>

                <div className="footer__copyright">
                    <small>&copy; Victor. Frontend React-Redux Developer.</small>
                </div>*/}

                <div className="footer__content">
                    <div className="footer__header__text">
                        <h2>Калькулятор дома</h2>
                        <p><FiPhoneOutgoing className="phone__icon"/>+7(900)076-82-49</p>
                        <div className="icon__block">
                            {/*<p>Мы в соц сетях</p>*/}
                            <div className="icon__elements">
                                <a href="#">
                                    <BsYoutube className="footIcon youTube_icon"/>
                                </a>
                                <a href="#">
                                    <BsTelegram className="footIcon telegram_icon"/>
                                </a>
                                <a href="#">
                                    <BsInstagram className="footIcon instagram_icon"/>
                                </a>
                                <a href="#">
                                    <SlSocialVkontakte className="footIcon vk_icon"/>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="icon__fridge__block">
                        <img src={img}/>
                        {/*<GiWoodPile className="icon__fridge"/>*/}
                    </div>
                </div>
            </div>


        </footer>
    )
}

export default Footer