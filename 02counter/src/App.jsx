import { useState } from 'react'
import './App.css'

function App() {
  // use hooks - useState // this is changing the state 
  let [counter, setCounter] = useState(5) // 0th state - variable ; 1st state - function(which will control variable (counter))

  // let counter = 5 

  const addValue = ()=>{
    console.log("Clicked" , counter);
    if(counter < 20 ){
      counter = counter + 1 
      setCounter(counter) // or just do setCounter(counter-1)
    }

    
  }

    // what we will notice that the code is running but the UI is not updating 
    // Here comes the real power of React .
    // React reacts on the updation of the variable 
    // Hence the problem becuase which it is not updating is because react takes the charge 
    // Hence we have to use "Hooks" .

    const removeValue = () =>{
      console.log("Clicked", counter);

      if(counter>0){
          counter = counter - 1 ;
      setCounter(counter)
      }
    
  }

  return (
    <>
      <h1> Chai aur react</h1>
      <h2> Counter value {counter} </h2>

      <button
      onClick={addValue}
      >Add value {counter} </button> 
      <br />
      <button onClick={removeValue}>Remove value </button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
