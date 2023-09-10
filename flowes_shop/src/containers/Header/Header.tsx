import {Link as NavLink} from "react-router-dom";
import header from './header.module.scss'
import FlowerLogo from '../../assets/image/FLowerLogo.png'
import basket from './../../assets/image/icons/basket.svg'
import {useEffect, useState} from "react";


export const Header = (props) => {
    let [isActive, setActive] = useState(false)

    let toggleActive = () => {
        if (isActive === true) {
            setActive(false)
            document.body.classList.remove('_lock')
        } else {
            setActive(true)
            document.body.classList.add('_lock')
        }
    }

    let autoCloseMenu = (e) => {
        if (!e.target.closest(`.${header.iconMenu}`)) {
            setActive(false)
            document.body.classList.remove('_lock')
        }
    }

    useEffect(() => {
        document.addEventListener('click', autoCloseMenu)
        return () =>{
            document.removeEventListener('click', autoCloseMenu)
        }
    }, [])


    return (
        <div className={header.wrapper}>
            <div className={header.container}>
                <div className={header.logo}>
                    <img src={FlowerLogo}/>
                </div>
                <nav>
                    <ul className={isActive ? `${header.list} ${header._isActive}` : `${header.list}`}>
                        <li className={header.item}>
                            <NavLink
                                to={'/'}
                                className={header.link}
                                onClick={() => setActive(false)}
                            >Головна</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink
                                to={'/catalog'}
                                className={header.link}
                                onClick={() => setActive(false)}
                            >Каталог</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink
                                to={'/services'}
                                className={header.link}
                                onClick={() => setActive(false)}
                            >Послуги</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink
                                to={'/discounts'}
                                className={header.link}
                                onClick={() => setActive(false)}
                            >Акції</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink
                                to={'/basket'}
                                className={header.link}
                                onClick={() => setActive(false)}
                            >Кошик</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={header.menu}>
                    <div onClick={toggleActive}
                         className={isActive ? `${header.iconMenu} ${header._isActive}` : `${header.iconMenu}`}
                    ><span></span></div>
                    <div className={header.basket}>
                        <img src={basket}/>
                    </div>
                </div>
            </div>
        </div>
    )
}