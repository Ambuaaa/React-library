import { useEffect, useState } from 'react'
import {Todoprovider} from './contexts' 

import './App.css'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
// todos is a array in which there are lots of values 
const[todos, setTodos] = useState([]) ; // state me sare todos hain 

//----defining methods -----

// individual todos nahi hain abhi, we are talking about defining functionality only 
const addTodo = (todo) => {
  setTodos( (prev) => [{id: Date.now(), ...todo },  ...prev] )
}
// updatedTodo -kaun sa aisa id hai jo todo se match kar raha hai taaki mai usme ek naya todo add kar dun 
// 1) prev array ki state li(pura array mil gaya hoga) 2) array milte hin humne usme loop laga diya 3) har ek element pe jaao aur uska id find karo( (prevTodo) => prevTodo.id === id => har ek element pe jaake hum uska id check karenge prevTodo.id se ki bhai kya tu match kar raha hai jo id di gayi hai argument me ?) 
// 4) Agar match karti hai to jo naya todo diya gaya hai (updated), wo laga do aur nahi to waps wahi prevTodo rakh lo  
const updatedTodo = (id, todo) =>{
  setTodos( (prev) => prev.map( (prevTodo) => (prevTodo.id === id ? todo : prevTodo ) ) )
} 

const deleteTodo = ( (id) =>{
  // Please do not use .map => because .map us used to change the contents , but keep all the items . Use .filter() instead
  setTodos ( (prev) => prev.filter( (individualtodo) =>  individualtodo.id !== id ))
} )

// 1) id chahiye hoga 2) setTodos me change karna hai 3) setTodos me har ek previous value ka access chahiye. setTodos((prev) =>{})
// 4) Har ek perv pe mujhe ek map lagana hoga taaki main har ek individual todo list ke paas ja saku 5) prev.map((prevTodo) => {}) = har ek individual todo ke paas chala gaya
// 6) Sabse pehle ye find karna parega kya ye individual wahi hai jiski id di gayi hai , (prevTodo) => prevTodo === id ? .....(kuch karo).. : ...(nahi to aur kuch)..
//7) Agar id match kar gaya to = baaki saari values waisehi rakho, bas ek value change kar do . Isiliye spread operator use hoga (...prevTodo, completed: !prevTodo.completed ) = completed ke andar jaao aur agar true hai to false kar do , false hai to true. Hence, simple binary operator laga do(basicallu "complete" ko humne overwrite kar diya)
const toggleComplete = (id) =>{
  setTodos( (prev) => prev.map( (prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo ) )
}

// ------------------- LocalStorage in JavaScript always stores and returns values as strings.-----------------------
// useEffect kqki - we need ki jab bhi hum refresh karein page, to jo pehle se todos hain, wo rahe (na ki ur jaae)
// we can access localStorage in react only when we are not talking about Server Side rendering - because it is a browser- only feature . Hence we can only use it when the JS code runs in the browser(client side) 
useEffect( () => {
  const todos = JSON.parse(localStorage.getItem("todos")) // we will get the values of Key = "todos"
  console.log("Raw value from localStorage:", todos ); // <== ADD THIS
  if(todos && todos.length > 0){
    setTodos(todos)
  }
}, [] )
// ye wala tab run hoga jab naya todos(state) hum likhenge. Bhai naya kuch likhein todo me to wo dikhna bhi to chahiye refresh hoke . Isliye . EK tarika ye hai -  
useEffect( () => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])





return (
  <Todoprovider value={{todos, addTodo, updatedTodo, toggleComplete, deleteTodo}} > 
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>

                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map( (todo) => {
                          return <div key = {todo.id} // React requires a key on the outermost element when you're rendering a list. => This helps React efficently 1) identify which items changed 2) reorder or re-render only what's needed 
                            className='w-full'> 
                            <TodoItem todo={todo} /> 
                          </div> // we passed the prop todo (whose value will be what the user gave earlier)
                        } )}
                    </div>

                </div>
    </div>
  </Todoprovider>
  )
}

export default App
