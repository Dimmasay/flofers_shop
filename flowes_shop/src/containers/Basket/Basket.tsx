import bas from './Basket.module.scss'
import {ItemBasket} from "./ItemBasket/ItemBasket";
import {useContext} from "react";
import {basketType, SetStateContext, StateContext} from "../../App";


export const Basket = () => {

    let basket = useContext(StateContext)

    let itemsBasket = basket.map((el: basketType) => {
        return (
            <ItemBasket name={el.name} id={el.id} price={el.price} image={el.image} quantity={el.quantity}
                        addArticle={el.addArticle} sum={el.sum}/>
        )
    })


    return (
        <div className={bas.wrapper}>
            <div className={bas.titleBig}>Кошик</div>
            <div className={bas.products}>
                {itemsBasket}
            </div>
            <div className={bas.resul}>
                <div className={bas.resulTitle}>Всього:</div>
                <div className={bas.resulSum}></div>
            </div>
            <div className={bas.buttons}>
                <button className={bas.button}>Продовжити покупки</button>
                <button className={bas.button}>Оформити замовлення</button>
            </div>
        </div>
    )
}