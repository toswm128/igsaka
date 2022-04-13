import styled from "@emotion/styled";
import gif from "../../source/gif.gif";

const BoardItem = styled.div`
  width: 305px;
  img {
    width: 100%;
    height: 177px;
    object-fit: cover;
  }
`;

const Board = () => {
  return (
    <BoardItem>
      <img src={gif} alt="" />
      <div>a</div>
    </BoardItem>
  );
};
export default Board;
