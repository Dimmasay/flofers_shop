import {Link as NavLink} from "react-router-dom";
import header from './header.module.scss'
import FlowerLogo from '../../assets/image/FLowerLogo.png'
import basket from './../../assets/image/icons/basket.svg'
import {useContext, useEffect, useState} from "react";
import {BasketContextType, BasketReducerContext} from "../../reducer";


export const Header = () => {
    let [isActive, setActive] = useState(false)

    let {basketState} = useContext(BasketReducerContext) as BasketContextType

    let toggleActive = () => {
        if (isActive) {
            setActive(false)
            document.body.classList.remove('_lock')
        } else {
            setActive(true)
            document.body.classList.add('_lock')
        }
    }

    let autoCloseMenu = (e: DocumentEventMap["click"]) => {
        if (e.target instanceof HTMLDivElement) {
            if (!e.target.closest(`.${header.iconMenu}`)) {
                setActive(false)
                document.body.classList.remove('_lock')
            }
        }
    }

    useEffect(() => {
        document.addEventListener('click', autoCloseMenu)
        return () => {
            document.removeEventListener('click', autoCloseMenu)
        }
    }, [])


    return (
        <div className={header.wrapper}>
            <div className={header.container}>
                <NavLink to={'/flowers_shop'} className={header.logo}>
                    <img src={FlowerLogo}/>
                </NavLink>
                <nav>
                    <ul className={isActive ? `${header.list} ${header._isActive}` : `${header.list}`}>
                        <li className={header.item}>
                            <NavLink
                                to={'/flowers_shop'}
                                className={header.link}
                                onClick={() => setActive(false)}
                            >Головна</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink
                                to={'/flowers_shop/catalog'}
                                className={header.link}
                                onClick={() => setActive(false)}
                            >Каталог</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink
                                to={'/flowers_shop/services'}
                                className={header.link}
                                onClick={() => setActive(false)}
                            >Послуги</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink
                                to={'/flowers_shop'}
                                className={header.link}
                                onClick={() => setActive(false)}
                            >Акції</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink
                                to={'/flowers_shop/basket'}
                                className={header.link}
                                onClick={() => setActive(false)}
                            >Кошик <span>{basketState.quantityAll ? `(${basketState.quantityAll})` : null}</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={header.menu}>
                    <div onClick={toggleActive}
                         className={isActive ? `${header.iconMenu} ${header._isActive}` : `${header.iconMenu}`}
                    ><span></span></div>
                    <NavLink to={'/flowers_shop/basket'} className={header.basket}>
                        <img src={basket}/>
                        <span>{basketState.quantityAll ? `${basketState.quantityAll}` : null}</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}