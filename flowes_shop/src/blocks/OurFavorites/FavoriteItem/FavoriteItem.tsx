
import item from './FavoriteItem.module.scss'

type FavoriteItemType = {
    id: number,
    image: string,
    name: string
    price: number
}

export const FavoriteItem = (props: FavoriteItemType) => {
    return (
        <div className={item.item} key={props.id}>
            <div className={item.image}>
                <img src={props.image}/>
            </div>
            <div className={item.info}>
                <div className={item.name}>{`Букет «${props.name}»`}</div>
                <div className={item.price}>{`${props.price} грн.`}</div>
            </div>
            <button className={item.orderButton}>Замовити</button>
        </div>
    )
}