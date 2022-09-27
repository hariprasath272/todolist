import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./todo.css";

function Todo() {
  const [input, setInput] = useState("");
  const [todolist, setTodolist] = useState([
    {
      id: 1,
      task: "Header",
    },
    {
      id: 2,
      task: "Slider",
    },
    {
      id: 3,
      task: "Two column",
    },
    {
      id: 4,
      task: "Vertical bar",
    },
  ]);

  const handlchange = (e) => {
    setInput(e.target.value);
  };

  const addtodo = () => {
    setTodolist([...todolist, { id: uuidv4(), task: input }]);
    setInput("");
  };

  const handledelete = (id) => {
    const filterdata = todolist.filter((todo) => todo.id !== id);
    setTodolist(filterdata);
  };

  const handleupdate = (index) => {
    const updatetask = prompt("update your task", todolist[index].task);
    let copiedtodo = [...todolist];
    copiedtodo[index].task = updatetask;
    setTodolist(copiedtodo);
  };

  return (
    <div class="head-con">
      <h3>Todo List</h3>
      <label>ADD TASK</label>
      <br></br>
      <input value={input} onChange={handlchange}></input>
      <button className="btn-add" onClick={addtodo}>
        Add
      </button>
      <div class="class-con">
      {todolist.map((todo, index) => <div  class="content" key={todo.id}><div class="span-con">{todo.task}</div>
          <div class="con-flex">
          <button class="btn-del" onClick={() => handledelete(todo.id)}>DELETE</button>
          <button class="btn-upd" onClick={() => handleupdate(index)}>UPDATE</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
export default Todo;
