import React, { useState } from 'react'

const CounterApp = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = ()=>{
        setCount(count+1)
    }
    const handleDecrement = ()=>{
        setCount(count-1)
    }
    const Reset = ()=>{
        setCount(0)
    }
  return (
    <div className='apps'>
         <h1 className='header-title'>Counter App</h1>
        <div>
        <h2 className='count-title'>Count : <span className='count-value'>{count}</span></h2>
        <button className='btn'  onClick={handleIncrement} disabled={count===10 ? true:false}>+</button>
        <button className='btn' onClick={handleDecrement} disabled={count===0 ? true:false}>-</button>
        <button className='btn' onClick={Reset}>Reset</button>
        </div>
    </div>
  )
}

export default CounterApp