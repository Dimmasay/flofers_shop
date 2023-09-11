import {FullScreen} from "../containers/FullScreen/Fullscreen";
import {OurFavorites} from "../containers/OurFavorites/OurFavorites";
import {Create} from "../containers/Create/Create";
import {FormContainer} from "../containers/FormOrder/FormContainer";
import {Contacts} from "../components/Contacts/Contacts";
import pages from './Pages.module.scss'

export const HomePage = (props) => {
    return (<div className={`${pages.containerHomepage}`}>
            <FullScreen/>
            <OurFavorites/>
            <Create/>
            <Contacts/>
            <FormContainer />
        </div>
    )

}

