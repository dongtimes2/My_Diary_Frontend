import styled from 'styled-components';

import Calendar from '../components/Calendar';
import Todo from '../components/Todo';
const Schedule = () => {
  return (
    <>
      <ScheduleBox>
        <CalendarBox>
          <Calendar />
        </CalendarBox>
        <TodoBox>
          <Todo />
        </TodoBox>
      </ScheduleBox>
    </>
  );
};

const ScheduleBox = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const TodoBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  height: 100%;
  border-left: 1px solid lightgray;
`;

export default Schedule;
