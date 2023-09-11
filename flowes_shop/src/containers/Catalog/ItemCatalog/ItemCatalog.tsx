import item from './ItemCatalog.module.scss'

type ItemCatalogProps = {
    image: string,
    name: string,
    price: string
}

export const ItemCatalog = (props: ItemCatalogProps) => {
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
                <button className={item.orderButton}>Додати в кошик</button>
            </div>
        </div>
    )
}