// Here we are trying to access the data 

import React , {useContext} from 'react'
import UserContext from '../src/context/UserContext'


function Profile() {

  const {user} = useContext(UserContext) 

  if(!user) return <div>Please login</div>
  
  return <div> Welcome {user.username} </div>
}

export default Profile