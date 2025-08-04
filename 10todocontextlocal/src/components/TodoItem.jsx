import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
  //states
  const[isTodoEditable, setIsTodoEditable ] = useState(false) // ki edit karna hai ya nahi karna wo wala state
  const[todoMsg, setTodoMsg ] = useState(todo.todo) // by default - jo bhi todo hai uska todo . kqki jo todo select karenge uske andar ja ke uska vale lena hai || Ye state is liye taaki - todo ke andar hamara msg kya hai , ye jan na hai hume 

  const {updatedTodo, deleteTodo, toggleComplete} = useTodo() // sare functionality context api se hamne extract kar liya

  // functionality
  // for editing Todo
  const editTodo = () =>{
    updatedTodo(todo.id, {...todo, todo: todoMsg}) // hume update karne ke liye id aur todo chahiye. id to mil gaya par todo milne ke liye hume pehle spread karna parega object, then usme se fir todo nikalna parega
    setIsTodoEditable(false) // ho gaya bhai jitna kaam hona tha 
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id) // context se humne bas call kiya hai ; iski functionality to App.jsx me to define kar hi rakhi hai 
  }




    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />

            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg} // bhai naya msg likh do 
                onChange={(e) => setTodoMsg(e.target.value)} 
                readOnly={!isTodoEditable} 
            />

            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed} // disable property of button => set or return whether a button is disabled or not
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>

            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)} // kqki deletTodo ko bas ID chahiye tha 
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
