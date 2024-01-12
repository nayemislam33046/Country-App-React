import React,{useState} from 'react'

const NewTodo = (props) => {
const [Todo, setTodo] = useState({title:"",desc:""})
const {title,desc}= Todo
   


const handleSubmit= (e)=>{
     e.preventDefault()
     
     props.onAddTodo(Todo)
     setTodo({title:"",desc:""})
    }




    const handleChange = (e)=>{
    const name= e.target.name
    setTodo((oldTodo)=>{
      return {...oldTodo,[name]:e.target.value}
    })

    }
    


  return (
    <div>
        <form className='myform' onSubmit={handleSubmit}>
           <div className='mydiv'>
           <div className='title-bar'>
                <label htmlFor="title" className='title'>Title :</label>
                <input type="text" onChange={handleChange} value={title} className='title-box' name="title" id="title" />
            </div>
            <div className='desc-bar'>
                <label htmlFor="desc" className='title'>Description :</label>
                <textarea onChange={handleChange} name="desc" value={desc} id="desc" className='title-box' type="text"></textarea>
            </div>
            <button type='submit' className='mybtn'>Add Todo</button>
           </div>
        </form>
    </div>
  )
}

export default NewTodo