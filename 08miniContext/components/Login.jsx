// Here we are trying to send the data 

import React,{useContext , useState} from "react" // hook we have to use is - useContext
import UserContext from "../src/context/UserContext"


function Login() {

  const[username, setusername] = useState('')
  const[password, setPassword] = useState('')

  //using useContext hook
  const {setUser} = useContext(UserContext) // setUser is from UsercontextProvide.jsx // and in useContext() here we have to give the context 
// setUser is updating the global context // used because we are trying to add the data - if we have to access the data - use= {user}

  const handleSubmit = (e) => {
    e.preventDefault() // because by defulat kahi na kahi URL chali jati hai, main nahi chahta jai 
    setUser({username, password}) // now the data is sended
    //setUser is a function you got from the context (useContext(UserContext))
    // This data is now available to any other component that uses useContext(UserContext)

}

  return (
    <div>
      <h2> Please Login </h2>
      
      <input type="text"
      value={username}
      onChange={(e) => setusername(e.target.value) }
      placeholder="username"     
      />
      {"   "}
      
      <input type="text" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="password" />

      <button onClick={handleSubmit}> Submit </button>
    </div>
  )
}

export default Login