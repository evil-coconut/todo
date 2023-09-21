import React, { useState } from "react"
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const TodoForm = ({create}) => {
    
  const [title, setTitle] = useState({title: ''});

  function addNewTask(e) {
    e.preventDefault();
    const newTask = {
      ...title,
      id: Date.now(),
    }
    create(newTask)
    setTitle({title: ''});
  }
  return (
    <form>
      <MyInput 
          value={title.title} 
          onChange={e => setTitle({...title, title: e.target.value})}
          type="text" 
          placeholder="Новая задача"/>
        <MyButton onClick={addNewTask}>Создать задачу</MyButton>
    </form>
  )
};

export default TodoForm;
