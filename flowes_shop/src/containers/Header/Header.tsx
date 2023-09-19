import {Link as NavLink} from "react-router-dom";
import header from './header.module.scss'
import FlowerLogo from '../../assets/image/FLowerLogo.svg'
import basket from './../../assets/image/icons/basket.svg'
import {useContext, useEffect, useState} from "react";
import {BasketContextType, BasketReducerContext} from "../../reducers/BasketReducer";


export const Header = () => {
    let [isActive, setActive] = useState(false)

    let {basketState} = useContext(BasketReducerContext) as BasketContextType

    let toggleActive = () => {
        if (isActive) {
            closeMenuRemoveLockBody()
        } else {
            setActive(true)
            document.body.classList.add('_lock')
        }
    }

    let autoCloseMenu = (e: DocumentEventMap["click"]) => {
        if (e.target instanceof HTMLDivElement) {
            if (!e.target.closest(`.${header.iconMenu}`)) {
                closeMenuRemoveLockBody()
            }
        }
    }

    let closeMenuRemoveLockBody = () => {
        setActive(false)
        document.body.classList.remove('_lock')
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
                <NavLink to={'/'} className={header.logo}>
                    <img src={FlowerLogo}/>
                </NavLink>
                <nav>
                    <ul className={isActive ? `${header.list} ${header._isActive}` : `${header.list}`}>
                        <li className={header.item}>
                            <NavLink
                                to={'/'}
                                className={header.link}
                                onClick={closeMenuRemoveLockBody}
                            >Головна</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink
                                to={'/catalog'}
                                className={header.link}
                                onClick={closeMenuRemoveLockBody}
                            >Каталог</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink
                                to={'/services'}
                                className={header.link}
                                onClick={closeMenuRemoveLockBody}
                            >Послуги</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink
                                to={'/'}
                                className={header.link}
                                onClick={closeMenuRemoveLockBody}
                            >Акції</NavLink>
                        </li>
                        <li className={header.item}>
                            <NavLink
                                to={'/basket'}
                                className={header.link}
                                onClick={closeMenuRemoveLockBody}
                            >Кошик <span>{basketState.quantityAll ? `(${basketState.quantityAll})` : '(0)'}</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={header.menu}>
                    <div onClick={toggleActive}
                         className={isActive ? `${header.iconMenu} ${header._isActive}` : `${header.iconMenu}`}
                    ><span></span></div>
                    <NavLink to={'/basket'} className={header.basket}>
                        <img src={basket}/>
                        <span>{basketState.quantityAll ? `${basketState.quantityAll}` : '0'}</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}