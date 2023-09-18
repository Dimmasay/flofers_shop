import catalog from './Catalog.module.scss'
import {bouquets, bouquetType} from "../../assets/bouquets";
import {useState} from "react";
import {ItemCatalog} from "./ItemCatalog/ItemCatalog";
import {NavLink} from "react-router-dom";

export const Catalog = () => {

    let bouquetsList = bouquets

    let [state, setState] = useState<bouquetType[]>(bouquetsList)

    const filterItems = (param: string) => {
        let result = bouquetsList
            .filter((item) => item.sortList.includes(param))
        setState(result)
    }

    let currentList = state.map(item => <ItemCatalog name={item.name} id={item.id} price={item.price} image={item.image}
                                                     key={item.id}/>)


    return (
        <div className={catalog.wrapper}>
            <div className={catalog.header}>
                <div className={catalog.title}>Каталог</div>
                <NavLink to={'/flowers_shop/services/create-bouquets'} className={catalog.buttonHeader}>Створити свій букет</NavLink>
            </div>
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
        </div>
    )
}