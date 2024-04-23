// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <main className="green-light text-foreground bg-background ui-sans-serif">
                <App/>
            </main>
        </BrowserRouter>
    </React.StrictMode>
,
)