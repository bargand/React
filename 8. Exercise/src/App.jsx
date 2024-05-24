import { useState,useEffect } from 'react'
import './App.css'

import React from 'react'

const App = () => {
  const [value, setValue] = useState([])

  useEffect(() => {
    fetch('https://api.restful-api.dev/objects')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setValue(data);
      });
  }, []);
  
  return (
    <div>
      {value.map((values)=>{
        return <div key={values.id}>
          <p>{values.name}</p>
        </div>
      })}
    </div>
  )
}

export default App
