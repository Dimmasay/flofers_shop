import {FullScreen} from "../blocks/FullScreen/Fullscreen";
import {OurFavorites} from "../blocks/OurFavorites/OurFavorites";
import {Create} from "../blocks/Create/Create";
import {FormContainer} from "../containers/FormOrder/FormContainer";
import {Contacts} from "../blocks/Contacts/Contacts";
import pages from './Pages.module.scss'

export const HomePage = () => {
    return (<div className={`${pages.containerHomepage}`}>
            <FullScreen/>
            <OurFavorites/>
            <Create/>
            <Contacts/>
            <FormContainer />
        </div>
    )

}

