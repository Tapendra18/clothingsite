import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

function Todo() {
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
  });
  const [todoList, setTodoList] = useState([]);
  const [editActive, setEditActive] = useState(null);
  const [editValues, setEditValues] = useState({ title: "", description: "" });

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/v1/todoget");
      setTodoList(res?.data?.data || []);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/v1/todoadd", inputValues);
      setInputValues({ title: "", description: "" });
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleEdit = (todo, index) => {
    setEditActive(index);
    setEditValues({
      title: todo.title,
      description: todo.description,
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/v1/todoupdate/${todoList[editActive]?._id}`,
        editValues
      );
      fetchTodos();
      setEditActive(null);
      setEditValues({ title: "", description: "" });
    } catch (error) {
       console.error("Error saving todo:", error);
    }
  };

  const handleRemove = async (todo) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/v1/tododelete/${todo._id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error removing todo:", error);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Add title"
          value={inputValues.title}
          onChange={handleChange}
        />
        <input
          name="description"
          type="text"
          placeholder="Add description"
          value={inputValues.description}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>

      <div>
        {todoList.map((todo, index) => (
          <div key={index} style={{ display: "flex", gap: "10px" }}>
            {editActive === index ? (
              <>
                <input
                  name="title"
                  type="text"
                  value={editValues.title}
                  onChange={handleEditChange}
                />
                <input
                  name="description"
                  type="text"
                  value={editValues.description}
                  onChange={handleEditChange}
                />
                <button type="submit" onClick={handleSave}>
                  Save
                </button>
              </>
            ) : (
              <>
                <input value={todo.title} />
                <input value={todo.description} />
                <button type="submit" onClick={() => handleEdit(todo, index)}>
                  Edit
                </button>
              </>
            )}
            <button type="submit" onClick={() => handleRemove(todo)}>
              Remove
            </button>
          </div>
        ))}
         <ToastContainer />
      </div>
    </div>
  );
}

export default Todo;
