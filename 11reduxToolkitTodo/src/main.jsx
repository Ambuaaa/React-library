import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from "./app/store.js"

// aur context API me value ki jagah yaha pe store use karenge .  

createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <App />
  </Provider>
)
