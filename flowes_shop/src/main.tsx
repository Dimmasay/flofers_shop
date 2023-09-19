import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {HashRouter} from "react-router-dom";
import {ScrollToTop} from "./components/ScrollToTop/ScrollToTop";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <React.StrictMode>
            <ScrollToTop/>
            <App />
        </React.StrictMode>,
    </HashRouter>
)
