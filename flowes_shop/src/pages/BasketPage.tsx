import {Basket} from "../containers/Basket/Basket";
import pages from "./Pages.module.scss";

export const BasketPage = () => {
    return (<div className={`${pages.containerBasketPage} ${pages.container}`}>
        <Basket/>
    </div>)
}

