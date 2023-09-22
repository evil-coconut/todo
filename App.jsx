import React, { useState } from "react";
import './style/App.css';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [list, setList] = useState([
    {title: 'покушать', id: 1}, 
    {title: 'поспать', id: 2}, 
    {title: 'поиграть', id: 3}
  ]);

  const [completedList, setCompletedList] = useState([
    {title: 'погулять', id: 4}
  ])

  const completedTask = (task) => {// Выполненная задача, переходит в список выполненных
    completedList.push(task);
    setCompletedList(completedList);
    setList(list.filter(i => i.id !== task.id));
  }

  const createTask = (newTask) => {// Создание новой задачи
    setList([...list, newTask])
  }

  const removeTask = (task) => {// Удаление задачи
    setList(list.filter(i => i.id !== task.id))
  }

  const retrieveTask = (task) => {// Возвращение выполненной задачи в список не выполненных
    setList([...list, task]);
    setCompletedList(completedList.filter(i => i.id !== task.id));
  }

  return (
    <div className="App">
      <TodoForm create={createTask}/>
      <TodoList completed={completedTask} remove={removeTask} title='Что сделать' list={list}/>
      <TodoList retrieve={retrieveTask} title='Выполнено' list={completedList}/>
    </div>
  );
}

export default App;
