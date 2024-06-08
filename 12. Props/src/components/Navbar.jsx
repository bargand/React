import React from 'react'
import Button from './Button'

const Navbar = (props) => {
  return (
    <>
    <div>
      Navbar
    </div>
    <Button count={props.count}/>
    </>
  )
}

export default Navbar

//we can pass the props like this either we can do the same work with other files like button and component1
