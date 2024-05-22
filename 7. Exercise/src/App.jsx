import React,{useState, useEffect} from 'react'

const App = () => {
    const [text, setText] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setText(data);
        });
    }, []);
  return (
    <div>
      {text.map((texts)=>{
        <h1 key={texts.id}>{texts.title}</h1>
      })}
    </div>
  )
}

export default App
