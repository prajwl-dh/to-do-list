import React from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "./slices/todoSlice";

export default function App() {
  const [formData, setFormData] = React.useState({todo: ''});
  const toDo = useSelector((state) => state.todoReducer.value)

  function updateFormData(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const dispatch = useDispatch()

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
          <button onClick={() => {
            dispatch(addToDo(formData.todo))
            setFormData({todo: ''})
            }}>Add</button>
        </div>
        <ul id="list-container">
          
        </ul>
      </div>
    </div>
  );
}