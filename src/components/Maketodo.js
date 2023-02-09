import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaRegCircle, FaTrashAlt } from 'react-icons/fa';

import Todolist from './Todolist';

const CreateTodo = () => {
  const [todos, setTodos] = useState();
  const [content, setContent] = useState('');

  // 서버로부터 todos 가져오기
  useEffect(() => {
    fetch('http://localhost:8000/dummyTodos')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        console.log(data);
      });
  }, []);

  // content에 내용 넣기
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  // todo에 내용 넣기
  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      content,
      done: false,
    };

    const setNewTodo = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    };
    fetch('http://localhost:8000/dummyTodos', setNewTodo).then(() => {
      window.location.reload();
    });
  };

  // 삭제
  const handleDeleteClick = (id) => {
    fetch(`http://localhost:8000/dummyTodos/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  // done 수정하기
  const handlePatchClick = (id) => {
    fetch(`http://localhost:8000/dummyTodos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(),
    });
  };

  return (
    <div className='form-wrapper'>
      <div className='input-form'>
        <form className='input-form-makeTodo' onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={handleChangeContent}
            name='todo'
            placeholder='what do you think to do????'
            value={content}
          />
          <button className='submit-button'>Make!</button>
        </form>
        <div className='todo-container'>
          {todos &&
            todos.map((todo) => (
              <Todolist
                todo={todo}
                key={todo.id}
                handleDeleteClick={handleDeleteClick}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
