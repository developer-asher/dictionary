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
    history.push('/card');
  };

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
