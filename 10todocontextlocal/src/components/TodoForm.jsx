import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    
const[todo, setTodo] = useState("")
const {addTodo} = useTodo() // we needed addTodo function for adding in the form. Wo hum Context API ke useTodo se call karenge. addTodo ki functionality to humne bana li hai App.jsx me. const {addTodo} se hum use kar sakte  . Bhai App.jsx me kaam bataya hai, value to yahin denge . Hence object denga tab hi na wo spread karega(...todo) 

const add = (e) => {
  e.preventDefault() 
  
  if(!todo) return
  addTodo({ todo , completed: false}) // addTodo function me todo pass nahi krenge . Bhai wahan object hai wo . Tabhi na spread ho raha hai . Different values hain jaise - id, todo, completed 
 // bhai chahe to id: Date.now() yahan bhi likh sakte the ... par tmne wahan define kar rakhi hai isliye yahan mat karo .  
  setTodo("") // khali kar diya add kar ke 
}



    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} // wired with the state 
                onChange={ (e) => setTodo(e.target.value) }
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

