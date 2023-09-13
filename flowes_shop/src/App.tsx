import {Header} from "./containers/Header/Header";
import {HomePage} from "./pages/HomePage";
import {ServicesPage} from "./pages/ServicesPage";
import {Routes, Route} from "react-router-dom";
import {CatalogPage} from "./pages/CatalogPage";
import {BasketPage} from "./pages/BasketPage";
import app from './App.scss'
import {Footer} from "./containers/Footer/Footer";
import {CreateBouquets} from "./containers/CreateBouquets/CreateBouquets";
import React, {useState} from "react";

export let StateContext = React.createContext()
export let SetStateContext = React.createContext()

export type basketType = {
    name: string,
    id: number,
    price: number,
    image: string,
    quantity: number,
    addArticle: boolean,
    sum: number,
}
function App() {


    let [basketState, setBasketState] = useState<basketType[]>([])

    return (
        <StateContext.Provider className={app.container} value={basketState}>
            <SetStateContext.Provider value={setBasketState}>
                <Header/>
                <div className={app.content}>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/services' element={<ServicesPage/>}/>
                        <Route path='/services/create-bouquets' element={<CreateBouquets/>}/>
                        <Route path='/catalog' element={<CatalogPage/>}/>
                        <Route path='/basket' element={<BasketPage/>}/>
                    </Routes>
                </div>
                <Footer/>
            </SetStateContext.Provider>
        </StateContext.Provider>

    )
}

export default App
