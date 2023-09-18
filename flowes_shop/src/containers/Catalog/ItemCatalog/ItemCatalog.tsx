import item from './ItemCatalog.module.scss'
import React, {useContext} from "react";
import {BasketContextType, BasketReducerContext} from "../../../reducer";

type ItemCatalogProps = {
    image: string,
    name: string,
    price: number,
    id: number
}

export const ItemCatalog : React.FC<ItemCatalogProps> = (props) => {

    let {addProductToBasket} = useContext(BasketReducerContext) as BasketContextType

    let addProduct = () => {
        let prod = {
            name: props.name,
            id: props.id,
            price: props.price,
            image: props.image
        }
        addProductToBasket(prod)
    }

    return (
        <div className={item.item}>
            <div className={item.image}>
                <img src={props.image}/>
            </div>
            <div className={item.info}>
                <div className={item.name}>{`Букет «${props.name}»`}</div>
                <div className={item.price}>{`${props.price} грн.`}</div>
            </div>
            <div className={item.btn}>
                <button
                    className={item.orderButton}
                    onClick={addProduct}
                >Додати в кошик
                </button>
            </div>
        </div>
    )
}