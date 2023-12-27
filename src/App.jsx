import React from "react";
import './App.css';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [formData, setFormData] = React.useState({todo: ''});

  function updateFormData(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

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
          <button>Add</button>
        </div>
        <ul id="list-container">
          
        </ul>
      </div>
    </div>
  );
}