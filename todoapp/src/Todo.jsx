import { useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return alert("Enter task");
    setList([...list, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item, index) => (
          <TodoItem 
            key={index}
            text={item}
            index={index}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todo;