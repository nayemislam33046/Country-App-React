import React from 'react'

const World = (props) => {
  const {name,flags,area,population,capital}=props.cou
  const handleRemove = (name)=>{
     props.onRemove(name)
  }
  return (
    <div>
        <div className='mycard'>
        <img src={flags.png} alt={name.common} />
        <h1>{name.common}</h1>
        <h3>Capital : {capital}</h3>
        <h3>Area {area}</h3>
        <h3>Population : {population}</h3>
        <button className='btn' onClick={()=>{
            handleRemove(name.common)
        }}>Remove</button>
        </div>
    </div>
  )
}

export default World