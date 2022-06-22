import styled from "@emotion/styled";
import gif from "../../source/gif.gif";

export interface IBoard {
  href: string;
  name: string;
  spec: string;
  src: string;
}

const Board = ({ href, name, spec, src }: IBoard) => {
  return (
    <BoardItem target="_blank" href={href}>
      <img src={src} alt="" />
      <h1>{name}</h1>
      <div>{spec}</div>
    </BoardItem>
  );
};

const BoardItem = styled.a`
  transition: 1s all;
  width: 294px;
  img {
    width: 100%;
    height: 177px;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export default Board;
