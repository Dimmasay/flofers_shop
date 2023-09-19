import bas from './Basket.module.scss'
import {ItemBasket} from "./ItemBasket/ItemBasket";
import {useContext, useState} from "react";
import {BasketContextType, BasketReducerContext} from "../../reducers/BasketReducer";
import {NavLink} from "react-router-dom";


export const Basket = () => {

    let {basketState, setResetBasket} = useContext(BasketReducerContext) as BasketContextType

    let [inProcess, setProcess] = useState(false)

    let itemsBasket = basketState.basket.map((el) => {

        return (
            <ItemBasket key={el.id} name={el.name} id={el.id} price={el.price} image={el.image} quantity={el.quantity}
                        addArticle={el.addArticle} sum={el.sum}/>
        )
    })
    let toOrder = () => {
        setProcess(true)
        setTimeout(() => {
            alert(JSON.stringify(basketState, null, 2))
            setResetBasket()
            setProcess(false)
        }, 2000)

    }

    return (
        <div className={bas.wrapper}>
            <div className={bas.titleBig}>Кошик</div>
            <div className={bas.products}>
                {itemsBasket}
            </div>
            <div className={bas.resul}>
                <div className={bas.resulEnd}>
                    <div className={bas.resulTitle}>Всього:</div>
                    <div className={bas.resulSum}>{basketState.resultSum} грн.</div>
                </div>
            </div>
            <div className={bas.buttons}>
                <NavLink to={'/'} className={bas.button}>Продовжити покупки</NavLink>
                <button className={bas.button} onClick={toOrder}
                        disabled={!basketState.quantityAll || inProcess}>Оформити замовлення
                </button>
            </div>
        </div>
    )
}