import { createRoot } from 'react-dom/client'
// tolgo questo import CSS perchè utilizzeremo bootstrap
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)

// ricordiamoci di eliminare la StrictMode di React!
