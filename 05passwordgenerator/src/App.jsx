import { useState , useCallback, useEffect, useRef} from 'react'

function App() {

  const [length , setLength] = useState(8) ;
  const [numberAllowed , setNumberAllowed] = useState(false) ;
  const [charAllowed , setcharAllowed] = useState(false) ; 
  const [password , setpassword] = useState("")

  // userRef hook
  const passwordRef = useRef(null)


  // creating func which will actually generate password
  const passwordGenerator = useCallback( () =>{
    let pass = "" 
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>/?`~"

    for(let i = 1 ; i <= length ; i++){
      let char = Math.floor(Math.random() * str.length ) // 0 → str.length - 1
      pass += str.charAt(char)
    }

    setpassword(pass) // to update the value of the password stored in React's memory
// “Hey React, update the password variable to be this new string I just created (called pass), and please re-render the component with this new value.”

  } , [length , numberAllowed , charAllowed, setpassword])


   const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select() ;
    passwordRef.current?.setSelectionRange(0,99) ;
    window.navigator.clipboard.writeText(password) ;                                                                                                                           
  } ,[password]) 

  // passwordGenerator() - you cannot call this function like this 
  // other method could be to use button and in that use onClick function 
  
  // other method is to learn one more hook - useEffect hook
  useEffect( () => {
    passwordGenerator()
  } , [length, numberAllowed, charAllowed, passwordGenerator] )
  //-----------Notes--------------
  // useEffect(fn, deps) -
  // Runs the side-effect function fn after the component renders, and again whenever any value in deps changes.
// ✅ useCallback ensures the passwordGenerator function is not unnecessarily recreated on every render.
// ✅ useEffect ensures that every time your inputs (slider, checkbox) change, it runs passwordGenerator() to generate a new password.


 
  return (
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-2xl px-5 py-4 my-8 bg-gray-800  text-orange-500'>
      <h1 className='text-xl text-center text-white my-3 '> Password Generator </h1>
      {/* for displaying the passowrd  */}
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50' >
        <input 
          type="text"
          value={password} 
          className='outline-none w-full py-1 px-3' 
          placeholder='Password'
          readOnly
          // using useRef hook now 
          ref={passwordRef} // took the reference
        />
        <button 
        onClick={copyPasswordToClipboard}

        className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0'> 
          Copy </button>

      {/* setting the range(length)  */}
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max ={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label> Length: {length}  </label>
        </div>

      {/* for checkbox number  */}
        <div className='flex itmes-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=> !prev ) ;  
          }} 
          />
          <label htmlFor='numberInput'> Numbers </label>
        </div>

      {/* for checkbox characters */}
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {charAllowed}
            id='characterAllowed'
            onChange={ () => 
              {setcharAllowed((prev) => !prev ) ; 
              }} 
            />
            <label htmlFor='characherAllowed'> Characters </label>
          </div>



      </div>
    </div>

  )
}

export default App
