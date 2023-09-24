import item from './FavoriteItem.module.scss'
import {useContext} from "react";
import {BasketContextType, BasketReducerContext} from "../../../reducers/BasketReducer";

type FavoriteItemType = {
    id: number,
    image: string,
    name: string
    price: number
}

export const FavoriteItem = (props: FavoriteItemType) => {
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
        <div className={item.item} key={props.id}>
            <div className={item.image}>
                <img src={props.image}/>
            </div>
            <div className={item.info}>
                <div className={item.name}>{`Букет «${props.name}»`}</div>
                <div className={item.price}>{`${props.price} грн.`}</div>
            </div>
            <button className={item.orderButton} onClick={addProduct}>Замовити</button>
        </div>
    )
}