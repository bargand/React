import React, { useState } from "react";
import "./BodyElement.css";

const BodyElement = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [checkedCount, setCheckedCount] = useState(0);

  let handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false, isEditing: false }]);
    setTodo("");
  };

  let handleChange = (e) => {
    setTodo(e.target.value);
  };

  let handleCheckboxChange = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    setCheckedCount(newTodos.filter(todo => todo.isCompleted).length);
  };

  let handleEditChange = (index, value) => {
    const newTodos = [...todos];
    newTodos[index].todo = value;
    setTodos(newTodos);
  };

  let handleEditToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].isEditing = !newTodos[index].isEditing;
    setTodos(newTodos);
  };

  let handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    setCheckedCount(newTodos.filter(todo => todo.isCompleted).length);
  };

  return (
    <>
      <div className="formElement">
        <p className="input-container">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            placeholder="Enter Your Todo"
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
          <span>Save</span>
        </button>
      </div>
      <div className="lowerPart">
        <h1>Your Todos</h1>
        <div className="count">
        <p>Checked: {checkedCount}</p>
        <p>Unchecked: {todos.length - checkedCount}</p>
        </div>
        {todos.map((item, index) => {
          return (
            <div className="todoText" key={index}>
              <div className="todoTextFirst">
                <label className="container">
                  <input 
                    type="checkbox" 
                    checked={item.isCompleted} 
                    onChange={() => handleCheckboxChange(index)} 
                  />
                  <svg viewBox="0 0 64 64" height="2em" width="2em">
                    <path
                      d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                      pathLength="575.0541381835938"
                      className="path"
                    ></path>
                  </svg>
                </label>
                {item.isEditing ? (
                  <input 
                    type="text" 
                    value={item.todo} 
                    onChange={(e) => handleEditChange(index, e.target.value)} 
                  />
                ) : (
                  <p>{item.todo}</p>
                )}
              </div>
              <div className="toButtons">
                <button className="btn" onClick={() => handleEditToggle(index)}>
                  {item.isEditing ? "Save" : "Edit"}
                </button>
                <button className="btn" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BodyElement;
