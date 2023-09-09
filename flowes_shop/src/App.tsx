import './App.scss'
import {Header} from "./containers/Header/Header";
import {HomePage} from "./pages/HomePage";
import {ServicesPage} from "./pages/ServicesPage";
import {Routes, Route} from "react-router-dom";
import {CatalogPage} from "./pages/CatalogPage";
import {DiscountsPage} from "./pages/DiscountsPage";
import {BasketPage} from "./pages/BasketPage";
import app from './App.scss'
import {Footer} from "./containers/Footer/Footer";

function App() {

    return (
        <div className={app.container}>
            <Header/>
            <div className={app.content}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/services' element={<ServicesPage/>}/>
                    <Route path='/catalog' element={<CatalogPage/>}/>
                    <Route path='/discounts' element={<DiscountsPage/>}/>
                    <Route path='/discounts' element={<DiscountsPage/>}/>
                    <Route path='/basket' element={<BasketPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App
