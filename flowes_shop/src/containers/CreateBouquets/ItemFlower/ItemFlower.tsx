import item from './ItemFlower.module.scss'
import {useState} from "react";

type SortItemFlowerType = {
    id?: number,
    color: string
}

type ItemFlowerType = {
    image: string,
    name: string,
    sort: SortItemFlowerType[]
}

export const ItemFlower = (props: ItemFlowerType) => {
    let [state, setState] = useState(false)


    let sorts = props.sort.map(el => {
        return (
            <div className={state ?`${item.sort} ${item.sortSelect}` :`${item.sort}`} style={{backgroundColor: `${el.color}`}}></div>
        )
    })


    return (
        <div className={item.item}>
            <div className={item.image}>
                <img src={props.image} alt="/"/>
            </div>
            <div className={item.name}>{props.name}</div>
            <div className={item.menu}>
                <button className={item.button}>-</button>
                <div className={item.sorts}>
                    {sorts}
                </div>
                <button className={item.button}>+</button>
            </div>
        </div>
    )
}