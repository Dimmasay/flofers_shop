import item from './ItemCatalog.module.scss'
import {useContext} from "react";
import {SetStateContext, StateContext} from "../../../App";

type ItemCatalogProps = {
    image: string,
    name: string,
    price: number,
    id: number
}

export const ItemCatalog = (props: ItemCatalogProps) => {

    let basket = useContext(StateContext)
    let setBasket = useContext(SetStateContext)

    let addProductToBasket = (name: string, id: number, price: number, image: string) => {


        let productBasketTemplate = {
            name: name,
            id: id,
            price: price,
            image: image,
            quantity: 1,
            addArticle: false,
            sum: price * this.quantity,
        }

        if (!basket.some(el => el.id === id)) {
            setBasket([...basket, productBasketTemplate])
        } else {
            basket.find(el => el.id === id).quantity++
        }
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
                    onClick={() => addProductToBasket(props.name, props.id, props.price, props.image)}
                >Додати в кошик
                </button>
            </div>
        </div>
    )
}