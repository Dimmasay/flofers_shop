import {Header} from "./containers/Header/Header";
import {HomePage} from "./pages/HomePage";
import {ServicesPage} from "./pages/ServicesPage";
import {Route, Routes} from "react-router-dom";
import {CatalogPage} from "./pages/CatalogPage";
import {BasketPage} from "./pages/BasketPage";

import {Footer} from "./containers/Footer/Footer";
import {CreateBouquets} from "./containers/CreateBouquets/CreateBouquets";

import {BasketReducer} from "./reducer";

function App() {
//ts-ignore
    return (
        <BasketReducer>
            <Header/>
            <Routes>
                <Route path='/flowers_shop' element={<HomePage/>}/>
                <Route path='/flowers_shop/services' element={<ServicesPage/>}/>
                <Route path='/flowers_shop/services/create-bouquets' element={<CreateBouquets/>}/>
                <Route path='/flowers_shop/catalog' element={<CatalogPage/>}/>
                <Route path='/flowers_shop/basket' element={<BasketPage/>}/>
            </Routes>
            <Footer/>
        </BasketReducer>
    )
}

export default App
