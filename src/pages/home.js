import React from 'react'
import Product from '../components/product'

const Home = () => {
  return (
    <div className='container'>
      <div className="layout">
        <div className='left'></div>  
        <Product /> 
      </div>
          
      <div className="bg-overlay"></div>
    </div>
  )
}

export default Home
