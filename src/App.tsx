import React from "react";
import styled from "@emotion/styled";
import Board from "./components/Board";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.div`
  font-size: 45px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main`
  width: 1240px;
  margin: 0 auto;
`;

const Taps = styled.div`
  display: flex;
  width: 100%;
`;
const Tap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;
`;
function App() {
  return (
    <div className="App">
      <Header>
        <Title>이거 살까</Title>
        <Search>
          <input placeholder="검색어를 입력해 주세요" type="text" />
        </Search>
      </Header>
      <Main>
        <Taps>
          <Tap>쿠팡</Tap>
          <Tap>네이버 쇼핑</Tap>
          <Tap>다나와</Tap>
          <Tap>쿠팡</Tap>
        </Taps>
        <Boards>
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </Boards>
      </Main>
    </div>
  );
}

export default App;
