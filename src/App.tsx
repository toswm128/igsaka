import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Board from "./components/Board";
import axios from "axios";
import { IBoard } from "./components/Board/Board";

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

const Search = styled.form`
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
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`;

const useSearch = () => {
  const [keyword, setKeyWord] = useState("");
  const [searchData, setSearchData] = useState([]);

  const onChangeKeyWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  };

  const getSearchData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5000/?search=${keyword}`
      );
      setSearchData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { searchData, onChangeKeyWord, getSearchData, keyword };
};

function App() {
  const { searchData, onChangeKeyWord, getSearchData, keyword } = useSearch();

  return (
    <div className="App">
      <Header>
        <Title>이거 살까</Title>
        <Search
          onSubmit={(e) => {
            e.preventDefault();
            window.history.pushState("", "main", `/${keyword}`);
            getSearchData();
          }}
        >
          <input
            onChange={onChangeKeyWord}
            placeholder="검색어를 입력해 주세요"
            type="text"
          />
        </Search>
      </Header>
      <Main>
        <Boards>
          {searchData &&
            searchData.map(({ href, name, spec, src }: IBoard) => (
              <Board  href={href} name={name} src={src} spec={spec} />
            ))}
        </Boards>
      </Main>
    </div>
  );
}

export default App;
