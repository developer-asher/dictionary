import React from 'react';
import styled from 'styled-components';

const WordCard = ({ wordInfo }) => {
  return (
    <Card>
      <div>
        <h2>단어</h2>
        <p>{wordInfo.name}</p>
      </div>
      <div>
        <h2>설명</h2>
        <p>{wordInfo.desc}</p>
      </div>
      <div>
        <h2>예시</h2>
        <p className={'example'}>{wordInfo.example}</p>
      </div>
    </Card>
  );
};

const Card = styled.section`
  width: 49%;
  height: 320px;
  max-height: 320px;
  margin-top: var(--smMargin);
  border-radius: var(--smRadius);
  padding: 20px;
  background-color: #fff;
  overflow-y: auto;

  &:first-child,
  &:nth-child(2) {
    margin-top: 0;
  }

  &:nth-child(2) {
    @media all and (max-width: 375px) {
      margin-top: var(--smMargin);
    }
  }

  & div {
    margin-bottom: var(--mdMargin);

    &:last-child {
      margin-bottom: 0px;
    }

    &:nth-child(2) > p,
    &:nth-child(3) > p {
      height: 40px;
    }
  }

  & h2 {
    display: inline-block;
    margin-bottom: var(--smMargin);
    border-bottom: 1px solid #999;
    font-size: 14px;
    font-weight: bold;
    color: #999;
  }

  & .example {
    margin-bottom: 0;
    color: var(--point);
  }

  @media all and (max-width: 375px) {
    width: 100%;
  }
`;

export default WordCard;
