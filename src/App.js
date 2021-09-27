import './App.css';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Home from './components/Home';
import AddWordCard from './components/AddWordCard';
import Spinner from './components/Spinner';
import { loadWordFB } from './redux/modules/word';

function App() {
  const dispatch = useDispatch();
  let is_loading = useSelector((state) => state.word.isLoading);

  useEffect(() => {
    dispatch(loadWordFB());
  }, [dispatch]);

  if (is_loading) {
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
    </Container>
  );
}

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

const Container = styled.div`
  width: 80%;
  margin: 60px auto 0 auto;
  border-radius: var(--smRadius);
  padding: 30px;
  background-color: #eee;
`;

export default App;
