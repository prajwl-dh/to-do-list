import React from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { addToDo, removeToDo, completeToDo } from "./slices/todoSlice";

export default function App() {
  const [formData, setFormData] = React.useState({todo: ''});
  const toDo = useSelector((state) => state.todoReducer.value)
  const dispatch = useDispatch()

  console.log(toDo)

  function updateFormData(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const toDoArray = toDo.map((todo) => (
    <li key={todo.id} className={todo.completion? "checked" : null} onClick={() => dispatch(completeToDo(todo.id))}>
      <p className={todo.completed? "checked" : null}>{todo.todo}</p>
      <span className="material-symbols-outlined" onClick={() => dispatch(removeToDo(todo.id))}>Delete</span>
    </li>
  ))

  return (
    <div className="container">
      <div className="todo-app">
        <div className="app-title">
          <h2>To-Do List App</h2>
          <h4>
            Features : Add tasks, remove tasks, mark as completed
            </h4>
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
          <button onClick={() => {
            if(formData.todo.trim() !== ''){
              dispatch(addToDo(formData.todo))
              setFormData({todo: ''})
            }else{
              return
            }
            }}>Add</button>
        </div>
        <ul id="list-container">
          {toDoArray}
        </ul>
      </div>
    </div>
  );
}