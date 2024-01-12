import React from 'react'
import Todo from './todo.jsx'
const Todos = (props) => {

  return (
    <div>
     
     
        {


        props.todos.map((todo)=>(
        <Todo todo={todo.todo} key={todo.id} onRemoveTodo={props.onRemoveTodo}/>)
        ) 


    }
    
    
    </div>
  )
}
export default Todos