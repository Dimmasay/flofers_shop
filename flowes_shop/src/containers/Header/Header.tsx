import {Link as NavLink} from "react-router-dom";
import header from './header.module.scss'
import FlowerLogo from '../../assets/image/FLowerLogo.png'




export const Header = (props) => {
    return (
        <div className={header. wrapper}>
            <div className={header.container}>
                <div className={header.logo}>
                    <img src={FlowerLogo}/>
                </div>
                <nav>
                    <ul className={header.list}>
                        <li className={header.item}>
                            <NavLink to={'/'} className={header.link}>Головна</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink to={'/catalog'} className={header.link}>Каталог</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink to={'/services'} className={header.link}>Послуги</NavLink>
                        </li>
                        <li className={header.item}>

                            <NavLink to={'/discounts'} className={header.link}>Акції</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink to={'/basket'} className={header.link}>Кошик</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}