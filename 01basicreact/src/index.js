import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <App />
);

// createRoot
// react script injection of script into the html 
// react make its own DOM 
// Take a function in which return a html and then the html is rendered by react
// hence we can write HTML by JS . Now HTML got programming capabilities
// it is called single page application because - the Html we have only have one div (here root)
