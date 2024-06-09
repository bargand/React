import React, { useContext } from 'react'
import { counterContext } from '../context/context.js'


const Component1 = () => {
  const {count} = useContext(counterContext)
  return (
    <div>
    {count}
    </div>
  )
}

export default Component1
