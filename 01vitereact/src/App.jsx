

import Chai from "./chai"

function App() {

  const username = "chai aur code" // how to inject this variable = using {} - this is called "evaluated expression"  

  return (
    <>
    <Chai />
    <h1>Chai aur react {username} </h1>   
    This is wrapped under the fragment 
    </>
  
  )
}

export default App
 