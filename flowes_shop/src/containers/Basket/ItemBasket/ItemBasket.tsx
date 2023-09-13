import basket from './ItemBasket.module.scss'
import resetButton from './../../../assets/image/icons/reset.png'


type ItemBasketProps = {
    name: string,
    id: number,
    price: number,
    image: string,
    quantity: number,
    addArticle: boolean,
    // sum: number,
}

export const ItemBasket = (props: ItemBasketProps) => {


    return (<div className={basket.itemsRow}>
        <div className={`${basket.info} ${basket.column}`}>
            <div className={basket.image}>
                <img src={props.image}/>
            </div>
            <div className={basket.name}>{props.name}</div>
        </div>
        <div className={`${basket.addArticle} ${basket.column}`}>
            <div className={basket.title}>Додати листівку з підписом</div>
            <input type={'checkbox'} className={basket.addArticleInput}/>
        </div>
        <div className={`${basket.quantity} ${basket.column}`}>
            <div className={basket.title}>Кількість</div>
            <div className={basket.quantityForm}>
                <button className={basket.quantityButton}>-</button>
                <input value={props.quantity} className={basket.quantityInput}/>
                <button className={basket.quantityButton}>+</button>
            </div>
        </div>
        <div className={`${basket.reset} ${basket.column}`}>
            <div className={basket.title}>Видалити</div>
            <button className={basket.resetButton}>
                <img src={resetButton}/>
            </button>
        </div>
        <div className={`${basket.sum} ${basket.column}`}>
            <div className={basket.title}>Вартість</div>
            <div className={basket.sumValue}>{props.price * props.quantity}</div>
        </div>
    </div>)
}