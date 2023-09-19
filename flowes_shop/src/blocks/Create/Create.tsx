import create from './Create.module.scss'
import createImage from '../../assets/image/home/create.jpg'
import {ButtonOlive} from "../../components/ButtonOlive/ButtonOlive";
import {NavLink} from "react-router-dom";

export const Create = () => {
    return (
        <div className={create.wrapper}>
            <div className={create.blockLeft}>
                <div className={create.image}>
                    <img src={createImage}/>
                </div>
            </div>
            <div className={create.blockRight}>
                <div className={create.info}>
                    <div className={create.title}>
                        Створення букетів на замовлення
                    </div>
                    <div className={create.text}>
                        Команда наших професійних флористів створить букет за Вашим дизайном. Обирайте квіти і декоративні
                        доповнення для Вашої композиції на нашому сайті або в шоурумі, додавайте в кошик і ми створимо Щось
                        Особливе. Не обмежуйте свою фантазію, адже для нас немає нічого неможливого.
                    </div>
                    <NavLink to={'/services'} className={create.button}>Про нас</NavLink>
                </div>
                <div className={create.buttonCreate}>
                    <ButtonOlive text={'Створити букет'} to={'/services/create-bouquets'}/>
                </div>
            </div>
        </div>
    )
}