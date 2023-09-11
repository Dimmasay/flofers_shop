import catalog from './Catalog.module.scss'
import {bouquets, bouquetType, sortNames} from "../../assets/bouquets";
import {useEffect, useState} from "react";
import {ItemCatalog} from "./ItemCatalog/ItemCatalog";

export const Catalog = (props) => {

    let initialState = bouquets

    let [state, setState] = useState<bouquetType[]>(initialState)

    const filterItems = (param: string) => {
        let result = initialState
            .filter((item) => item.sortList.includes(param))
        setState(result)
    }

    let currentList = state.map(item => <ItemCatalog name={item.name} id={item.id} price={item.price} image={item.image} key={item.id}/>)


    return (
        <div className={catalog.containerCatalog}>
            <ul className={catalog.list}>
                <li className={catalog.item}>
                    <button
                        className={`${catalog.button} ${catalog.buttonBig}`}
                        onClick={() => filterItems('all')}
                    >Всі букети
                    </button>
                </li>
                <li className={catalog.item}>
                    <button
                        className={catalog.button}
                        onClick={() => filterItems('minimal')}
                    >Мінімалізм
                    </button>
                </li>
                <li className={catalog.item}>
                    <button
                        className={catalog.button}
                        onClick={() => filterItems('big')}
                    >Великі
                    </button>
                </li>
                <li className={catalog.item}>
                    <button
                        className={`${catalog.button} ${catalog.buttonBig}`}
                        onClick={() => filterItems('fest')}
                    >Святкові
                    </button>
                </li>
                <li className={catalog.item}>
                    <button
                        className={catalog.button}
                        onClick={() => filterItems('toBirthday')}
                    >До Дня Народження
                    </button>
                </li>
                <li className={catalog.item}>
                    <button
                        className={catalog.button}
                        onClick={() => filterItems('toMart')}
                    >На 8 березня
                    </button>
                </li>
                <li className={catalog.item}>
                    <button
                        className={catalog.button}
                        onClick={() => filterItems('toLove')}
                    >До дня закоханих
                    </button>
                </li>
                <li className={catalog.item}>
                    <button
                        className={catalog.button}
                        onClick={() => filterItems('toWedding')}
                    >Весільні
                    </button>
                </li>
            </ul>
            <div className={catalog.products}>
                {currentList}
            </div>
        </div>
    )
}