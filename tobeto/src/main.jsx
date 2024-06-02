import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Layout} from './layouts/Layout.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
   <Router>
     <Layout>
        <App />
    </Layout>
   </Router>
)
