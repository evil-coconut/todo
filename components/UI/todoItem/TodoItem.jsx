import React from "react";
import classes from "./TodoItem.module.css"

const TodoItem = (props) => {
  if(props.completed === true) {
    return (
      <label className={classes.completedTask}>
        <div className={classes.innerLabel}><input className={classes.myInput} type="checkbox" checked={true}></input>
        {props.name}</div>
        <button onClick={() => props.retrieve(props.task)}>Вернуть</button>
      </label>
    )
  } else {
    return (
      <label className={classes.myLabel}>
        <div onClick={() => props.completed(props.task)} className={classes.innerLabel}><input className={classes.myInput} type="checkbox"></input>
        {props.name}</div>
        <button onClick={() => props.remove(props.task)}>Удалить</button>
      </label>
    )
  }
};

export default TodoItem;
