function TodoItem({ text, index, deleteTask }) {
    return (
      <li style={{ margin: "10px 0" }}>
        {text}
        <button 
          onClick={() => deleteTask(index)} 
          style={{ marginLeft: "10px" }}
        >
          Delete
        </button>
      </li>
    );
  }
  
  export default TodoItem;