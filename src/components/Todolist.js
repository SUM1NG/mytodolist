import { useState, useEffect } from 'react';
import { FaCheckCircle, FaRegCircle, FaTrashAlt } from 'react-icons/fa';

const Todolist = ({ todo, handleDeleteClick }) => {
  const { id, content, done } = todo;
  const [checkdone, setCheckdone] = useState(done);

  const handelOnClick = () => {
    setCheckdone(!checkdone);
    fetch(`http://localhost:8000/dummyTodos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: !done }),
    });
  };

  return (
    <div className='todolist'>
      {checkdone ? (
        <div className='done-todo'>
          <span className='done-todo-icon' onClick={handelOnClick}>
            <FaCheckCircle />
          </span>
          <span className='todo-content'>{content}</span>
          <span onClick={() => handleDeleteClick(id)}>
            <FaTrashAlt />
          </span>
        </div>
      ) : (
        <div className='not-done-todo'>
          <span className='not-done-todo-icon' onClick={handelOnClick}>
            <FaRegCircle />
          </span>
          <span className='todo-content'>{content}</span>
          <span onClick={() => handleDeleteClick(id)}>
            <FaTrashAlt />
          </span>
        </div>
      )}
    </div>
  );
};

export default Todolist;
