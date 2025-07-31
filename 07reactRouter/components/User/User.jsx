import React from "react";
import { useParams } from "react-router-dom";
// useParams() is a React Router hook that gives you access to
//  URL parameters (also called "route params").
// It is used inside a component that is rendered by a Route
// this is how Dynamic data is being taken 
function User (){
  const {userid} = useParams()
  return(
    <div>User: {userid} </div>
  )
}

export default User 