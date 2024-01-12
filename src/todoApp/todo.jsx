import React from 'react'

const Todo = (props) => {


    const {title,desc}=props.todo
    const {id}=props

    const handleClick = (id)=>{
      props.onRemoveTodo(id)
    }

  return (
    
    <div  className='container'>
        <div className='mytodo'>
      <div className='myinput'>
        <h2>{title}</h2>
        <h3>{desc}</h3>
      </div>
        <div>
            <button className='btn' onClick={handleClick}>
                Delete
            </button>
        </div>
    </div>
</div>
  )
}

export default Todo