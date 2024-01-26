import React from 'react'
import Product from './product'

const Products = (props) => {
  
    return (
    <div className='products'>
        {props.Products.map((pro,id)=>(
          <Product pro={pro} key={id}/>
        ))}
    </div>
  )
}

export default Products