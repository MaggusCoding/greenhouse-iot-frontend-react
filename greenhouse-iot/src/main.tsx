// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './output.css'
import {BrowserRouter} from "react-router-dom";

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <main className="green-dark text-foreground bg-background">
                <App/>
            </main>
        </BrowserRouter>
    </React.StrictMode>
,
)