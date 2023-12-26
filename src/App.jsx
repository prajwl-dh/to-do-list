import React from "react";
import './App.css';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [toDo, setToDo] = React.useState([]);
  const [formData, setFormData] = React.useState({todo: ''});

  function addToDo() {
    if(formData.todo === ''){
      return
    }else {
      setToDo((prev) => ([
        ...prev,
        {id: uuidv4(), value: formData.todo, completed: false}
      ]))
      setFormData((prev) => ({todo: ''}))
    }
  }

  function deleteToDo(id){
    setToDo((prev) => prev.filter((todo) => todo.id !== id))
  }

  function completeToDo(id){
    setToDo((prev) => prev.map((todo) => {
      if(todo.id === id){
        return {...todo, completed: !todo.completed}
      }else{
        return todo
      }
    }))
  }

  function updateFormData(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const toDoArray = toDo.map((x) => (
    <li key={x.id} className={x.completed? "checked" : null} onClick={() => completeToDo(x.id)}>
      <p onClick={() => completeToDo(x.id)} className={x.completed? "checked" : null}>{x.value}</p>
      <span onClick={() => deleteToDo(x.id)} className="material-symbols-outlined">Delete</span>
    </li>
  ));

  return (
    <div className="container">
      <div className="todo-app">
        <div className="app-title">
          <h2>To-do app using React and Redux</h2>
          <i className="fa-solid fa-book-bookmark"></i>
        </div>
        <div className="row">
          <input
            name="todo"
            type="text"
            id="input-box"
            placeholder="Add your tasks"
            value={formData.todo}
            onChange={updateFormData}
          />
          <button onClick={addToDo}>Add</button>
        </div>
        <ul id="list-container">
          {toDoArray}
        </ul>
      </div>
    </div>
  );
}