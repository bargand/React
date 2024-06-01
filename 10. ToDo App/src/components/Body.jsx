import React from 'react'
import "./Body.css"
import BodyElement from './BodyElement'
import Footer from './Footer'

const Body = () => {
  return (
    <>
    <div className='bodyMain'>
      <div className="banner">
      </div>
      <div className="todoBody">
        <h1>TODO</h1>
        <BodyElement/>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default Body
