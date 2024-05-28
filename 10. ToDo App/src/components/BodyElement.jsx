import React,{useState} from "react";
import "./BodyElement.css";

const BodyElement = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  let handleAdd=()=>{
    setTodos([...todos, {todo, isCompleted: false}])
    setTodo("")
    console.log(todos)
  }
  let handleChange=(e)=>{
    setTodo(e.target.value)
  }
  return (
    <>
      <div className="formElement">
        <p className="input-container">
          <input
          onChange={handleChange}
          value={todo}
            type="text"
            placeholder="Enter your name"
            name="text"
            id="text"
            className="input-field"
            autoComplete="name"
          />
        </p>
        <button onClick={handleAdd}>
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Submit</span>
        </button>
      </div>
      <div className="lowerPart">
        <h1>Your Todos</h1>
        {todos.map(item=>{
        return <div className="todoText">
          <p>{item.todo}</p>
        <div className="toButtons">
          <button className="btn">Edit</button>
          <button className="btn">Delete</button>
        </div>
        </div>
        })}
      </div>
    </>
  );
};

export default BodyElement;
