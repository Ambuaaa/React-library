import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react' 

const vaiablewewanttoinject = "Chai air react"


const anotherELement = ( // creating our own element 
    <a href="https://google.com" target= '_blank'>Visit Google </a>
)

const reactElement = React.createElement( // creating our own element 
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google' ,
    vaiablewewanttoinject // this is how react uses the variable 
)

createRoot(document.getElementById('root')).render(
  
    <App />
    // anotherELement
    // reactElement 

)
