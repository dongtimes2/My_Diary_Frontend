import { useState } from 'react';
import styled from 'styled-components';

import Calendar from '../components/Calendar';
import DetailTodo from '../components/DetailTodo';
import Modal from '../components/Modal';
import ModalPortal from '../components/ModalPortal';
import Sidebar from '../components/Sidebar';
import Todo from '../components/Todo';

const Schedule = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  return (
    <>
      <PageBox>
        <SidebarBox>
          <Sidebar />
        </SidebarBox>
        <CalendarBox>
          <Calendar />
        </CalendarBox>
        <TodoBox>
          <Todo
            setSelectedTodo={setSelectedTodo}
            onShowModal={setIsShowingModal}
          />
        </TodoBox>
      </PageBox>

      {isShowingModal && (
        <ModalPortal>
          <Modal onCloseModal={setIsShowingModal}>
            <DetailTodo selectedTodo={selectedTodo} />
          </Modal>
        </ModalPortal>
      )}
    </>
  );
};

const PageBox = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const SidebarBox = styled.div`
  display: flex;
  flex-basis: 5%;
  width: 100%;
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 55%;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const TodoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  width: 100%;
  border-left: 1px solid lightgray;
`;

export default Schedule;
