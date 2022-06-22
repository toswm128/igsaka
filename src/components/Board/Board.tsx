import styled from "@emotion/styled";
import gif from "../../source/gif.gif";

export interface IBoard {
  href: string;
  name: string;
  spec: string;
}

const Board = ({ href, name, spec }: IBoard) => {
  return (
    <BoardItem href={href}>
      {/* <img src={gif} alt="" /> */}
      <h1>{name}</h1>
      <div>{spec}</div>
    </BoardItem>
  );
};

const BoardItem = styled.a`
  width: 305px;
  img {
    width: 100%;
    height: 177px;
    object-fit: cover;
  }
`;

export default Board;
