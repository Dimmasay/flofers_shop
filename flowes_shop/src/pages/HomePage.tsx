import {FullScreen} from "../containers/FullScreen/Fullscreen";
import {OurFavorites} from "../containers/OurFavorites/OurFavorites";
import {CreateBouquets} from "../containers/CreateBouquets/CreateBouquets";
import {FormContainer} from "../containers/FormOrder/FormContainer";
import {Contacts} from "../components/Contacts/Contacts";
import pages from './Pages.module.scss'

export const HomePage = (props) => {
    return (<div className={pages.containerHomepage}>
            <FullScreen/>
            <OurFavorites/>
            <CreateBouquets/>
            <Contacts/>
            <FormContainer />
        </div>
    )

}

