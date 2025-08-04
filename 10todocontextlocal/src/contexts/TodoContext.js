import { createContext, useContext } from "react";

// creating a Provider TodoContext
export const TodoContext = createContext({
  // todos(real writing of todo) , addTodo, updateTodo, deletTodo, toggleCompleted
  // todos(array) is the values and all other are functionality 
  todos: [
    {
      id: 1 ,
      todo: "todo msg",
      complete: false,

    } // This would be the structure 
  ],

  addTodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {} 

})

export const Todoprovider = TodoContext.Provider

// hook which will allow any children inside the TodoProvider to access the values stored in the context
export const useTodo = () => {
  return useContext(TodoContext)
}

