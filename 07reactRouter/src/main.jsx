import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../components/Home/Home.jsx'
import About from '../components/About/About.jsx'
import Contact from '../components/Contact/Contact.jsx'
import User from '../components/User/User.jsx'
import Github from '../components/Github/Github.jsx'

// 1st method - createBrowserRouter() - method which takes array
// const router = createBrowserRouter([
//   {
//     path: '/' , // top level path
//     element: <Layout />,
//     children: [ // children be in array 
//       {path:"",
//        element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact", // in Navlink , we used this in the "to" attribute
//         element: <Contact />
//       }
//     ]
//   }
// ])

//2nd method - inside createBrowserRouter() use createRoutesFromElements() inside it - write the first Router with starting and closing tag , then eventually nest it as per the requirement
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout />}>

      <Route path = '' element= {<Home/>} />
      <Route path = 'about' element= {<About/>} />
      {/* we can also nest it further inside the route  */}
      <Route path = 'contact' element= {<Contact/>} >
      <Route path=':abhishek' element= {<div> Hello bhai </div>} />
      </Route>
      <Route path = 'user/:userid' element= {<User/>} />

      <Route
      // loader ={ () => {}} // we can directly write the fetch API here for the optimisation
      // please check from the documentation - it is used for the optimisation
      path= 'github' 
      element = {<Github/>}></Route>
      
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
