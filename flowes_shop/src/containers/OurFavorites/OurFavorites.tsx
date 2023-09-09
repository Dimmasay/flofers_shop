import our from './OurFavorites.module.scss'
import {bouquets, bouquetType, favoritesNames} from "../../assets/bouquets";
import {FavoriteItem} from "../../components/FavoriteItem/FavoriteItem";

export const OurFavorites = () => {


    let favorites = bouquets.filter((bouquet:bouquetType)=>{
        return favoritesNames.some(name => name === bouquet.name)})

    let favoriteItems = favorites.map((item: bouquetType)=>{
        return <FavoriteItem name={item.name} id={item.id} price={item.price} image={item.image} key={item.id}/>
    })


    return (
        <div className={our.container}>
            <div className={our.title}>Наші Бестселлери</div>
            <div className={our.list}>{favoriteItems}</div>
        </div>
    )
}