import { useState } from 'react'

import Color from './Color' 

function App() {
  const [color, setcolor] = useState("White")

  

  return (
    <div className='w-full h-screen duration-200'style={{backgroundColor: color}} >

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
       <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>

        <button onClick={ () => setcolor("red") }
        className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
        style={{backgroundColor: "red"}}>Red</button>

        <button onClick={ () => setcolor("green") } 
        className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
        style={{backgroundColor: "green"}}>Green</button>

         <button onClick={ () => setcolor("blue") } 
         className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
        style={{backgroundColor: "blue"}}>Blue</button>

         <button onClick={ () => setcolor("olive") } 
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
        style={{backgroundColor: "Olive"}}>Olive</button>

         <button onClick={ () => setcolor("grey") }
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
        style={{backgroundColor: "Grey"}}>Grey</button>

         <button onClick={ () => setcolor("yellow") } 
         className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
        style={{backgroundColor: "Yellow"}}>Yellow</button>

         <button onClick={ () => setcolor("pink") } 
         className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
        style={{backgroundColor: "Pink"}}>Pink</button>

         <button onClick={ () => setcolor("purple") } 
         className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
        style={{backgroundColor: "Purple"}}>Purple</button>

         <button onClick={ () => setcolor("lavender") } 
         className='outline-none px-4 py-1 rounded-full text-black shadow-2xl' 
        style={{backgroundColor: "Lavender"}}>Lavender</button>

         <button onClick={ () => setcolor("white") } 
         className='outline-none px-4 py-1 rounded-full text-black shadow-2xl' 
        style={{backgroundColor: "white"}}>White</button>

         <button onClick={ () => setcolor("black") }
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' 
        style={{backgroundColor: "Black"}}>Black</button>

        
        
       </div>

    </div>
    </div>
  )
}

export default App
