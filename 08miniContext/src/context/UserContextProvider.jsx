import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

// UserContextProvider - custom component you created to wrap your entire app (or part of it) and provide a global user state using React Context.
const UserContextProvider = ({children}) =>{

  const [user, setUser] = useState(null)

  return(
    <UserContext.Provider value={ {user, setUser} }>
    {children}
    </UserContext.Provider>

  //   <UserContext.Provider value={ {user, setUser} }>      
  //       This is the actual Context Provider
  // You are passing { user, setUser } as a value to share with the whole app
  // Any component wrapped inside this will be able to access user and setUser via:
  // const { user, setUser } = useContext(UserContext);

  )

}

export default UserContextProvider