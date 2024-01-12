import React,{useState} from 'react'
import Todos from './todos'
import  './inputTodo.css'
import NewTodo from './NewTodo'
import { v4 as uuidv4 } from 'uuid';




export default function Home() {

  const [todos, setTodos] = useState([])

  
  const handleAddTodo = (todo)=>{
     setTodos((prevTodo)=>{
        return [...prevTodo,{ id:uuidv4(), todo}]
     })
}





const handleRemoveTodo=(id)=>{
  setTodos((prev)=>{
  const filterTodo = prev.filter((todo)=>todo.id == id)
   return filterTodo
});
}




  return (
    <div className='app'>
<div>
<h1 className='todoapp'>Todo App</h1>
<NewTodo onAddTodo={handleAddTodo}/>
<Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
</div>
 </div>
  
  
  )


}
