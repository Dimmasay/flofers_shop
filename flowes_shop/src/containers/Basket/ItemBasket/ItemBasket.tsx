import basket from './ItemBasket.module.scss'
import resetButton from './../../../assets/image/icons/reset.svg'
import {useContext} from "react";
import {BasketContextType, BasketReducerContext} from "../../../reducers/BasketReducer";


export type ItemBasketProps = {
    name: string,
    id: number,
    price: number,
    image: string,
    quantity: number,
    addArticle: boolean,
    sum: number,
}

export const ItemBasket = (props: ItemBasketProps) => {
    const {
        decreaseQuantityProduct,
        increaseQuantityProduct,
        deleteProduct,
        toggleAddArticle
    } = useContext(BasketReducerContext) as BasketContextType



    const decreaseQuantity = () => {
        decreaseQuantityProduct(props.id)
    }
    const increaseQuantity = () => {
        increaseQuantityProduct(props.id)
    }

    const delProduct = () => {
        deleteProduct(props.id)
    }


    const toggleCheckbox = (e:any) => {

        if (e.target.type === "checkbox") {
            toggleAddArticle(props.id, e.target.checked)
        }
    }

    return (<div className={basket.item}>
        <div className={basket.info}>
            <div className={basket.image}>
                <img src={props.image}/>
            </div>
            <div className={basket.name}>«{props.name}»</div>
        </div>
        <div className={basket.row}>
            <div className={`${basket.addArticle} ${basket.column}`}>
                <div className={basket.title}>Додати листівку з підписом</div>
                <input name='addArticle' id='addArticle' type='checkbox' className={basket.addArticleInput}
                       onChange={e => toggleCheckbox(e)}/>
            </div>
            <div className={`${basket.quantity} ${basket.column}`}>
                <div className={basket.title}>Кількість</div>
                <div className={basket.quantityForm}>
                    <button className={basket.quantityButton} onClick={decreaseQuantity}
                            disabled={props.quantity <= 1}>-
                    </button>
                    <div className={basket.quantityInput}>{props.quantity}</div>
                    <button className={basket.quantityButton} onClick={increaseQuantity}>+</button>
                </div>
            </div>
            <div className={`${basket.reset} ${basket.column}`}>
                <div className={basket.title}>Видалити</div>
                <button className={basket.resetButton} onClick={delProduct}>
                    <img src={resetButton}/>
                </button>
            </div>
            <div className={`${basket.sum} ${basket.column}`}>
                <div className={basket.title}>Вартість</div>
                <div className={basket.sumValue}>{props.sum} грн.</div>
            </div>
        </div>
    </div>)
}