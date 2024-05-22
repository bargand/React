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
        return <div key={texts.id}>
          <h1>{texts.title}</h1>
          <p>{texts.body}</p>
        </div>
      })}
    </div>
  )
}

export default App
