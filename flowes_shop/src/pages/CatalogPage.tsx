import pages from "./Pages.module.scss";
import {Catalog} from "../containers/Catalog/Catalog";
import {NavLink} from "react-router-dom";

export const CatalogPage = (props) => {
    return (<div className={pages.containerCatalogPage}>
        <div className={pages.header}>
            <div className={pages.title}>Каталог</div>
            <NavLink to='./' className={pages.button}>Створити свій букет</NavLink>
        </div>
        <Catalog/>
    </div>)
}

