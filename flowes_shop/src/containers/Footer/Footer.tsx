import footer from './footer.module.scss'
import logo from './../../assets/image/FLowerLogo.png'
import instagram from './../../assets/image/icons/instagram.png'
import fb from './../../assets/image/icons/fb.png'
import whatsapp from './../../assets/image/icons/whatsapp.png'
import {NavLink} from "react-router-dom";


export const Footer = (props) => {
    return (
        <div className={footer.wrapper}>
            <div className={footer.container}>
                <div className={`${footer.logoColumn} ${footer.column}`}>
                    <div className={footer.logoImage}>
                        <img src={logo}/>
                    </div>
                    <div className={footer.logoPhone}>
                        + 38 (050) 678 45 35
                    </div>
                    <div className={`${footer.logoMail} ${footer.column}`}>flower@gmail.com</div>
                </div>
                <div className={` ${footer.column}`}>
                    <div className={footer.title}>Компанія</div>
                    <ul className={footer.list}>
                        <li className={footer.item}>
                            <NavLink to={'./'}>Про нас</NavLink>
                        </li>
                        <li className={footer.item}>
                            <NavLink to={'./'}>Партнери</NavLink>
                        </li>
                        <li className={footer.item}>
                            <NavLink to={'./'}>Колекції</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={`${footer.column}`}>
                    <div className={footer.title}>Послуги</div>
                    <ul className={footer.list}>
                        <li className={footer.item}>
                            <NavLink to={'./'}>Створити букет</NavLink>
                        </li>
                        <li className={footer.item}>
                            <NavLink to={'./'}>Готові букети</NavLink>
                        </li>
                        <li className={footer.item}>
                            <NavLink to={'./'}>Доставка</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={`${footer.column}`}>
                    <div className={footer.title}>Додатково</div>
                    <ul className={footer.list}>
                        <li className={footer.item}>
                            <NavLink to={'./'}>Акції</NavLink>
                        </li>
                        <li className={footer.item}>
                            <NavLink to={'./'}>Подарункові Сертифікати</NavLink>
                        </li>
                        <li className={footer.item}>
                            <NavLink to={'./'}>Новинки</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={`${footer.linkColumn} ${footer.column}`}>
                    <div className={footer.title}>Слідкуйте за нами</div>
                    <ul className={footer.linkList}>
                        <li className={footer.linkItem}>
                            <NavLink to={'./'}>
                                <img src={whatsapp}/>
                            </NavLink>
                        </li>
                        <li className={footer.linkItem}>
                            <NavLink to={'./'}>
                                <img src={fb}/>
                            </NavLink>
                        </li>
                        <li className={footer.linkItem}>
                            <NavLink to={'./'}>
                                <img src={instagram}/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}