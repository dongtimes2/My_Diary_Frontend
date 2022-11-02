import PropTypes from 'prop-types';
import styled from 'styled-components';

const DetailTodo = ({ selectedTodo }) => {
  return (
    <DetailTodoBox>
      <TitleBox>{selectedTodo.title}</TitleBox>
      <div className="blank-area" />
      <ContentBox>{selectedTodo.content}</ContentBox>
    </DetailTodoBox>
  );
};

DetailTodo.propTypes = {
  selectedTodo: PropTypes.object.isRequired,
};

const DetailTodoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  font-size: 20px;

  .blank-area {
    display: flex;
    flex-basis: 5%;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background-color: white;
  border-radius: 10px;
  white-space: pre-wrap;
  flex-basis: 15%;
`;

const ContentBox = styled.div`
  display: flex;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  white-space: pre-wrap;
  flex-basis: 80%;
  overflow: scroll;
`;

export default DetailTodo;
