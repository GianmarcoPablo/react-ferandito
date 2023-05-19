import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from "./HelloWorldApp.jsx"
// import FirstApp from './FirstApp.jsx'
import CounterApp from './CounterApp.jsx'
import "./styles.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={18} />
    </React.StrictMode>
)