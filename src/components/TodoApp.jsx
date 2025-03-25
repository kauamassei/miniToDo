import { useEffect, useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="app-container">
        <h1 className="title">Lista de tarefas</h1>
        {/* forms */}
        <form onSubmit={handleSubmit} className="form-container">
          <input className="input-field"
            type="text"
            placeholder="Digite uma tarefa..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="add-button">Adicionar</button>
        </form>

        {todos.length === 0 && <p className="empty">Não há tarefas</p>}
      </div>
    </>
  );
};

export default TodoApp;
