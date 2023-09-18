import basket from './ItemBasket.module.scss'
import resetButton from './../../../assets/image/icons/reset.png'
import {useContext, useState} from "react";
import {BasketContextType, BasketReducerContext} from "../../../reducer";
import acceptImg from './../../../assets/image/icons/accept.svg'


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
        toggleAddArticle} = useContext(BasketReducerContext) as BasketContextType

    const decreaseQuantity = () => {
        decreaseQuantityProduct(props.id)
    }
    const increaseQuantity = () => {
        increaseQuantityProduct(props.id)
    }
    const delProduct = () => {
        deleteProduct(props.id)
    }


    let [checked, setChecked] = useState(false)
    const toggleCheckbox = (e) => {

        // if (e.target.type === "checkbox") {
            toggleAddArticle(2, e.target.checked)
            setChecked(e.target.checked)
        // }
    }

    return (<div className={basket.item}>
        <div className={basket.info}>
            <div className={basket.image}>
                <img src={props.image}/>
            </div>
            <div className={basket.name}>«{props.name}»</div>
            <div className={basket.name}>«{props.id}»</div>
        </div>
        <div className={basket.row}>
            <div className={`${basket.addArticle} ${basket.column}`}>
                <div className={basket.title}>Додати листівку з підписом</div>
                <input name='addArticle' id='addArticle' type={'checkbox'} className={basket.addArticleInput}
                       onChange={toggleCheckbox}/>
                <label htmlFor='addArticle'
                       className={checked ? `${basket.quantityInputLabel} ${basket.checked}` : `${basket.quantityInputLabel}`}>
                    <img src={acceptImg}/>
                </label>
            </div>
            <div className={`${basket.quantity} ${basket.column}`}>
                <div className={basket.title}>Кількість</div>
                <div className={basket.quantityForm}>
                    <button className={basket.quantityButton} onClick={decreaseQuantity}
                            disabled={props.quantity <= 1}>-
                    </button>
                    <input value={props.quantity} className={basket.quantityInput} disabled={true}/>
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