import {FullScreen} from "../containers/FullScreen/Fullscreen";
import {OurFavorites} from "../containers/OurFavorites/OurFavorites";
import {CreateBouquets} from "../containers/CreateBouquets/CreateBouquets";
import {FormContainer, FormOrder} from "../containers/FormOrder/FormContainer";
import {Contacts} from "../components/Contacts/Contacts";

export const HomePage = (props) => {
    return (<>
            <FullScreen/>
            <OurFavorites/>
            <CreateBouquets/>
            <Contacts/>
            <FormContainer />
        </>
    )

}

