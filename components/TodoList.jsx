import React from "react";
import TodoItem from "./UI/todoItem/TodoItem"
import Title from "./UI/title/Title";

const TodoList = ({retrieve, completed, remove, title, list}) => {
  if(completed != undefined) {
    return (
      <div>
        <Title title={title}/>
        {list.map(task => <TodoItem completed={completed} remove={remove} key={task.id} name={task.title} task={task}/>)}
      </div>
    )
  } else {
    return (
      <div>
        <Title title={title}/>
        {list.map(task => <TodoItem retrieve={retrieve} completed={true} key={task.id} name={task.title} task={task}/>)}
      </div>
    )
  }
  
};

export default TodoList;
