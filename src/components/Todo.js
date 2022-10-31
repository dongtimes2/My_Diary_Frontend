import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import selectedDateState from '../recoil/dateState';

const Todo = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [todoList, setTodoList] = useState([]);

  const selectedDate = useRecoilValue(selectedDateState);

  const handleInputTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleInputContent = (event) => {
    setContent(event.target.value);
  };

  const handleEnterKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleCreateTodo();
    }
  };

  const handleSavetodo = () => {};

  const handleCreateTodo = () => {
    if (title.length) {
      const newTodoElement = {
        id: uuidv4(),
        date: `${selectedDate.year}-${selectedDate.month}-${selectedDate.date}`,
        title,
        content,
        isChecked: false,
      };

      setTitle('');
      setContent('');
      setTodoList((prev) => {
        return [...prev, newTodoElement];
      });
    } else {
      window.alert('메모를 입력하세요');
    }
  };

  const handleDeleteTodo = (index) => {
    setTodoList([...todoList.filter((_, idx) => idx !== index)]);
  };

  const handleCheckTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].isChecked = newTodoList[index].isChecked ? false : true;

    setTodoList([...newTodoList]);
  };

  return (
    <>
      <div>
        선택된 날짜: {selectedDate.year}년 {selectedDate.month}월{' '}
        {selectedDate.date}일
      </div>

      <input
        value={title}
        onChange={handleInputTitle}
        onKeyDown={handleEnterKeyDown}
        placeholder="이곳에 제목을 입력 (최대 30자)"
        maxLength="30"
      />
      <textarea
        value={content}
        onChange={handleInputContent}
        placeholder="이곳에 설명을 입력"
      />

      <button type="button" onClick={handleCreateTodo}>
        확인
      </button>

      <ul>
        {todoList.map((todo, index) => (
          <TodoItem key={todo.id}>
            <div className="checkbox-area">
              <input
                type="checkbox"
                onChange={() => handleCheckTodo(index)}
                checked={todo.isChecked}
              />
            </div>

            <ContentBox className="content-area" isChecked={todo.isChecked}>
              {todo.title}
            </ContentBox>

            <div className="button-area">
              <div className="detail-button-area">
                {todo.content && <button>상세</button>}
              </div>
              <div className="delete-button-area">
                <button type="button" onClick={() => handleDeleteTodo(index)}>
                  삭제
                </button>
              </div>
            </div>
          </TodoItem>
        ))}
      </ul>

      <button type="button" onClick={handleSavetodo}>
        저장하기
      </button>
    </>
  );
};

const TodoItem = styled.li`
  display: flex;
  width: 100%;
  padding: 5px 0;

  .checkbox-area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 5%;

    & > input {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }

  .button-area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 15%;

    .detail-button-area {
      display: flex;
      flex-basis: 50%;
    }

    .delete-button-area {
      display: flex;
      flex-basis: 50%;
    }
  }
`;

const ContentBox = styled.div`
  flex-basis: 80%;
  width: 100px;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  text-decoration: ${(props) => props.isChecked && 'line-through'};
  color: ${(props) => props.isChecked && 'lightgray'};
`;

export default Todo;
