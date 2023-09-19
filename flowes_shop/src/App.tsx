import {Header} from "./containers/Header/Header";
import {HomePage} from "./pages/HomePage";
import {ServicesPage} from "./pages/ServicesPage";
import {Route, Routes} from "react-router-dom";
import {CatalogPage} from "./pages/CatalogPage";
import {BasketPage} from "./pages/BasketPage";

import {Footer} from "./blocks/Footer/Footer";
import {CreateBouquets} from "./containers/CreateBouquets/CreateBouquets";

import {BasketReducer} from "./reducers/BasketReducer";

function App() {
//ts-ignore
    return (
        <BasketReducer>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/services' element={<ServicesPage/>}/>
                <Route path='/services/create-bouquets' element={<CreateBouquets/>}/>
                <Route path='/catalog' element={<CatalogPage/>}/>
                <Route path='/basket' element={<BasketPage/>}/>
            </Routes>
            <Footer/>
        </BasketReducer>
    )
}

export default App
