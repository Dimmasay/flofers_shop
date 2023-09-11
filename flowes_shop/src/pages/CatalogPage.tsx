import pages from "./Pages.module.scss";
import {Catalog} from "../containers/Catalog/Catalog";

export const CatalogPage = (props) => {
    return (<div className={`${pages.containerCatalogPage} ${pages.container}`}>
        <Catalog/>
    </div>)
}

