import React,{useState, useEffect} from 'react'
import Card from './components/Card';
import "./components/Card.css";

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
    <>
    <div className='cards'>
      {text.map((texts)=>{
        return <div key={texts.id}>
          <Card title= {texts.title} description = {texts.body}/>
        </div>
      })}
    </div>
    </>
  )
}

export default App
