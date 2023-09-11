import item from './ItemCatalog.module.scss'

export const ItemCatalog = (props) => {
    return (
        <div className={item.item} >
            <div className={item.image}>
                <img src={props.image}/>
            </div>
            <div className={item.info}>
                <div className={item.name}>{`Букет «${props.name}»`}</div>
                <div className={item.price}>{`${props.price} грн.`}</div>
            </div>
            <button className={item.orderButton}>Додати в кошик</button>
        </div>
    )
}