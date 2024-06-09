import React,{useContext} from 'react'
import { counterContext } from '../context/Context'

const Decrease = () => {
  const {count} = useContext(counterContext)
  const a = {count}
  return (
    <div>
      <h2>The Decreasing Value Is {count}</h2>
      
    </div>
  )
}

export default Decrease
