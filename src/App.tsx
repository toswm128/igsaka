import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Board from "./components/Board";
import axios from "axios";

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 16px;
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
  input {
    width: 711px;
    padding: 0 16px;
    font-size: 36px;
    height: 53;
    border: 0;
    border: 3px solid black;
    border-radius: 27px;
  }
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
  useEffect(() => {
    axios.get("http://localhost:5000/").then(res => console.log(res));
  }, []);
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
