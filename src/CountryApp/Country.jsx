import React from 'react'
import World from './World'

const Country = (props) => {

  return (
    <div>
       <section>
       {props.countries.map((cou,index)=>{
            const worldNew = {cou}

            return <World {...worldNew} key={index} onRemove={props.onRemoveCountry}/>
        })}
       </section>
    </div>
  )
}

export default Country