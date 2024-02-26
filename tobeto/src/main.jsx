import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MasterLayout from './layout/MasterLayout.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <MasterLayout>
        <App />
    </MasterLayout>
)
