import React from "react";
import classes from './Title.module.css';

const Title = (props) => {
  return (
    <h1 className={classes.myTitle}>{props.title}</h1>
  )
};

export default Title;
