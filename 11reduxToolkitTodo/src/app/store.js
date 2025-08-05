import {configureStore} from '@reduxjs/toolkit'

import todoReducer from '../features/todo/todoSlice'

export const store = configureStore( { // key value pair daal do 
  // reducer: todoReducer  // hum pura reducer ki list de sakte hain ( but hamare paas bas ek reducer hai - jiska name : "todo" hai. hence todoReducer)

   reducer: {
    todos: todoReducer  // ✅ This 'todos' must match useSelector(state => state.todos)
  }
  
})

