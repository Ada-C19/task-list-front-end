import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = ( props ) => {
  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          handleToggleComplete={props.handleToggleComplete}
          handleDeleteTask={props.handleDeleteTask}

        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(props.tasks)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleToggleComplete: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired 
};

export default TaskList;
