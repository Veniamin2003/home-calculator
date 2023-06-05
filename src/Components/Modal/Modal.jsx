import React from "react"
import "./Modal.css"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {FaTelegramPlane} from "react-icons/fa"
import IMG1 from "../../Images/StairsTypes/Modal/karta.jpg"

const Modal = ({active, setActive}) => {
    let watsAppLink = "https://wa.me/79085712253?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D0%BF%D0%B8%D1%88%D1%83%20%D0%B2%D0%B0%D0%BC%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0.%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%20%D0%B1%D1%8B%D1%82%D0%BE%D0%B2%D0%BE%D0%B9%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B8"
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="photo__modal">
                    <img src={IMG1} alt=""/>
                </div>
                <h3 className="header__modal">Ваша заявка успешно отправлена</h3>
                <p className="text__modal">Наш менеджер перезвонит вам в ближайшее время. Также вы можете позвонить нам сами по номеру ниже.</p>
                <p className="modal__phone">
                    <a href="tel:89085712253">+7(900)076-82-49</a>
                </p>
                {/*<div className="buttons__modal">
                    <div className="btn__modal">
                        <a href={watsAppLink}  target = "_blank" className="btn">
                            <div className="btn__modal__text">
                                <AiOutlineWhatsApp className="icon__modal__wts"/>
                                <p>Написать в WhatsApp</p>
                            </div>
                        </a>
                    </div>
                    <div className="btn__modal">
                        <a href="https://msngr.link/tg/@Petronik7" target = "_blank" className="btn">
                            <div className="btn__modal__text">
                                <FaTelegramPlane className="icon__modal__tlg"/>
                                <p>Написать в Telegram</p>
                            </div>
                        </a>
                    </div>
                </div>*/}

            </div>
        </div>
    )
}

export default Modal;