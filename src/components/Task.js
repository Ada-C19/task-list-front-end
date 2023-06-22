import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ( props ) => {
  const { isComplete, title } = props; 
  // const [complete, setComplete] = useState(props.isComplete);
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';
  const task = {
    id: props.id, isComplete : props.isComplete, title: props.title };
  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => props.handleToggleComplete(props.id, task)}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button"
      onClick={() => props.handleDeleteTask(props.id)}>x</button>
    </li>
  );
};

Task.propTypes = {
  
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    handleToggleComplete: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
    handlePostTask: PropTypes.func.isRequired,
};

export default Task;
