import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AddButton from './AddButton';
import WordCard from './WordCard';

const Home = (props) => {
  const history = useHistory();
  const btnTypeIcon = props.btn;
  let wordList = useSelector((state) => state.word.list);

  const goAddWord = () => {
    console.log('단어추가');
    history.push('/card');
  };

  // 처음 로드되면 firestore에 있는 데이터 보여주기
  // 미들웨어 로드 액션생성함수 > 액션생성함수 > 액션 > reducer > 뷰

  return (
    <>
      <WordWrap>
        {wordList.map((word, index) => {
          return <WordCard key={word.id} wordInfo={word} />;
        })}
      </WordWrap>
      <AddButton type={btnTypeIcon} click={goAddWord} />
    </>
  );
};

const WordWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: var(--mdMargin);
  border-radius: var(--smRadius);
  text-align: left;

  @media all and (max-width: 375px) {
    display: block;
  }
`;

export default Home;
