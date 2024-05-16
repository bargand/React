import React, {useState, useEffect} from 'react'


const Navbar = ({color}) => {
    const [value, setValue] = useState(0)
    useEffect(() => {
        console.log('Mouse Is Moved')
    }, [value])
  return (
    <div>
      <h1 onMouseMove={()=>{setValue(value+1)}}>Hi I Am A Navbar And My Color Is {color} {value}</h1>
    </div>
  )
}

export default Navbar
