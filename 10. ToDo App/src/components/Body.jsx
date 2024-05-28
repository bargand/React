import React from 'react'
import "./Body.css"
import BodyElement from './BodyElement'

const Body = () => {
  return (
    <>
    <div className='bodyMain'>
      <div className="banner">
      </div>
      <div className="todoBody">
        <h1>TODO</h1>
        <BodyElement/>
      </div>
    </div>
    </>
  )
}

export default Body
