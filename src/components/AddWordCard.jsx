import React, { useRef } from 'react';
import styled from 'styled-components';
import AddButton from './AddButton';
import { useDispatch } from 'react-redux';
import { createWordFB } from '../redux/modules/word';
import { useHistory } from 'react-router-dom';

const AddWordCard = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const wordRef = useRef(null),
    descRef = useRef(null),
    exRef = useRef(null);
  const btnTypeStr = props.btn;

  const addWord = () => {
    const wordObj = {
      name: wordRef.current.value,
      desc: descRef.current.value,
      example: exRef.current.value,
    };

    if (!wordObj) {
      return false;
    }

    dispatch(createWordFB(wordObj));
    wordRef.current.value = '';
    descRef.current.value = '';
    exRef.current.value = '';
    history.goBack();
  };

  return (
    <AddWrap>
      <Title>단어 추가하기</Title>
      <AddForom>
        <p>
          <label htmlFor=''>단어</label>
          <input type='text' ref={wordRef} />
        </p>
        <p>
          <label htmlFor=''>설명</label>
          <input type='text' ref={descRef} />
        </p>
        <p>
          <label htmlFor=''>예제</label>
          <input type='text' ref={exRef} />
        </p>
      </AddForom>
      <AddButton type={btnTypeStr} click={addWord} />
    </AddWrap>
  );
};

const AddWrap = styled.div``;

const Title = styled.h2`
  margin: var(--xsMargin) 0;
  padding: 15px 0 15px 10px;
  text-align: left;
  font-weight: bold;
`;

const AddForom = styled.form`
  border-radius: var(--smRadius);
  padding: 20px;
  background-color: #fff;

  & > p {
    margin-bottom: var(--mdMargin);

    &:last-child {
      margin-bottom: 0;
    }
  }

  & label,
  & input {
    display: block;
    width: 100%;
    text-align: left;
  }

  & label {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: var(--smMargin);

    @media all and (max-width: 375px) {
      font-size: 14px;
    }
  }

  & input {
    border: 1px solid #ccc;
    padding: 10px 0 10px 5px;
    font-size: 18px;

    @media all and (max-width: 375px) {
      font-size: 13px;
    }
  }

  @media all and (max-width: 375px) {
    font-size: 16px;
  }
`;

export default AddWordCard;
