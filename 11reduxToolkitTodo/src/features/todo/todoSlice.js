import {createSlice, nanoid } from '@reduxjs/toolkit' ;
// we only need one method = createSlice that will make reducers for us 
// nanoid is a method which generates unique id

// starting me kaisa state hoga - wo bananenge hum initalState // here we took it as an object, kqki object me bahut kuch aa jaega.
const initialState = {
  todos: [
    {
    id: 1 ,
    text: "Hello World", 
    }

  ],
}


// here we are actually making slice. What is slice -  Redux Toolkit Makes Reducers Easy via createSlice() . And Reducer is just a functionality
export const todoSlice = createSlice({ 
  name: 'todo' , // This is just a label.  It tells Redux: “This slice is about todo-related state.” // chrome extension me yahi naam show hoga
  
  initialState , // This is your starting state for the slice.
  
  reducers: {  // This is where you define how the state should change when an action is dispatched.  these are functions that live inside your slice. 
    
    addTodo: (state, action) => { // adTodo is a property and then the function of it (either define the function there or define the function elsewhere). We always get access of two things - state and function
        const todo = { // state gives access of every values jo intitally hain . // values - 
        id: nanoid() ,
        text: action.payload  // This is the action // .payload is an object (to uske andar dot property laga ke aur bhi access kar sakte ho . ABhi iski property text hai, isliye. text nahi likhenge)
      }
      state.todos.push(todo) // => State Update = bhai state bhi to change karna prega na // we basically pushed the function todo that we made right now in the intial "todos" . Hence we used pushed
     },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter( (todo) => todo.id !== action.payload ) // state.todos is current array of todos.(state) || action.payload  = the id of the todo you want to remove (action)
    },  
  }

})

// export all the functionality individually - so we can use it further(components me)
export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer // sare reducers ka list chahiye hota hai store.js ko