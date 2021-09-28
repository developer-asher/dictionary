import './App.css';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Home from './components/Home';
import AddWordCard from './components/AddWordCard';
import Spinner from './components/Spinner';
import { loadWordFB } from './redux/modules/word';

const pageUpStyle = {
  position: 'fixed',
  right: '20px',
  bottom: '20px',
  padding: '0',
  backgroundColor: '#333',
  color: '#fff',
  transition: 'opacity 0.3s ease-in',
};

function App() {
  const dispatch = useDispatch();
  let isLoading = useSelector((state) => state.word.is_loading);
  let [visible, setVisible] = useState(false);

  const movePageUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);

  useEffect(() => {
    dispatch(loadWordFB());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container className='App'>
      <Title>My Dictionary</Title>
      <Route path={['/', '/home']} exact>
        <Home btn={'icon'} />
      </Route>
      <Route path='/card'>
        <AddWordCard btn={'string'} />
      </Route>
      <IconButton
        style={{ ...pageUpStyle, opacity: visible ? '1' : '0' }}
        onClick={movePageUp}
      >
        <KeyboardArrowUpIcon style={{ fontSize: '40px' }} />
      </IconButton>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  margin: 60px auto;
  border-radius: var(--smRadius);
  padding: 30px;
  background-color: #eee;
`;

const Title = styled.h1`
  border-radius: var(--smRadius);
  padding: 20px 0;
  font-size: 30px;
  font-weight: bold;
  background-color: #ffe065;

  @media all and (min-width: 375px) {
    font-size: 18px;
  }
`;

export default App;
