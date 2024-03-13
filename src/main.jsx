import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./Main.module.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className={styles.container}>
    <App />
    </div>
  </React.StrictMode>,
)
