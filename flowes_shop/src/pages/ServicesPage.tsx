import {Services} from "../containers/Services/Services";
import pages from "./Pages.module.scss";

export const ServicesPage = () => {
    return (<div className={`${pages.containerServicesPage} ${pages.container}`}>
        <Services/>
    </div>)
}

