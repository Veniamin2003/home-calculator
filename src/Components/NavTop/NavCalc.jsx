import img from "../../Images/icons8-white.png"
import React, {Component} from "react";
import "./NavCalc.css"
import {Link} from "react-router-dom";
import store from "./../../redux/redux-store"
import {connect} from "react-redux";
import s from "../Materials/Materials.module.css";

class NavCalc extends Component {
    state= {
        clicked: false,
        active: false
    };
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    menuItemClick = () => {
        this.setState({active: !this.state.active})
    }


    render () {
        const liClass = (this.props.typesPage.nameAU !== "") ? 'liActive' : 'liDisabled'
        return (
            <>
                <div className="navbar__calc">
                    <a href="tel:+79000768249" className="phone__nav_main">
                        +7(900)076-82-49
                        {/*<CgSmartHomeRefrigerator className="logo_navbar"/>*/}
                    </a >
                    <a className="nav_main_desc">
                        <img src={img}/>
                        {/*<HiHomeModern className="logo_navbar"/>*/}
                    </a>

                    <div>
                        <div id="click" onClick={this.handleClick}  className={this.state.clicked ? "#click active" : "#click"}></div>

                        <ul id="navbar" onClick={this.handleClick}  className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            {/*<li><a href="/fridge-price">Ремонт холодильников</a></li>
                            <li><a href="/wash-price">Ремонт стиральных машин</a></li>
                            <li><a href="/condit-price">Ремонт кондиционеров</a></li>*/}

                            {/*<li><a href="#price_photos">Фото работ</a></li>
                            <li><a href="#contact">Контакты</a></li>*/}
                            <li className={liClass}><Link to="/profile">Мои профиль</Link></li>
                            <li className={liClass}><Link to="/my-tasks">Мои заявки</Link></li>
                            <li className={liClass}><Link to="/calc">Калькулятор</Link></li>
                            <li><a href="http://home-calc.tilda.ws">На главную</a></li>
                            <li className="user_name">{this.props.typesPage.nameAU}</li>
                            <li className="user_name">{this.props.typesPage.lnameAU}</li>
                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        typesPage: state.typesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavCalc);