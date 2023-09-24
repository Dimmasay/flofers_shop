import create from './CreateBouquets.module.scss'
import {flowers} from "../../assets/flowers";
import {ItemFlower} from "./ItemFlower/ItemFlower";
import banner from './../../assets/image/create/createBanner.webp'

export const CreateBouquets = () => {

    let flowersList = flowers.map(el => {
        return (
            <ItemFlower image={el.image} name={el.name} sort={el.sort}/>
        )
    })


    return (
        <div className={create.wrapper}>
            <div className={create.banner}>
                <img src={banner}/>
                <div className={create.bannerText}>Моя Композиція</div>
            </div>
            <div className={create.content}>
                <div className={create.menu}>
                    <button className={create.title}>Додати в букет</button>
                    <div className={create.buttons}>
                        <button className={create.button}>Папір</button>
                        <button className={create.button}>Квіти</button>
                        <button className={create.button}>Додатково</button>
                    </div>
                </div>
                <div className={create.list}>
                    {flowersList}
                </div>
            </div>
        </div>
    )
}