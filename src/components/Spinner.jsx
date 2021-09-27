import React from 'react';
import styled from 'styled-components';
import LoopIcon from '@mui/icons-material/Loop';

const Spinner = (props) => {
  const spin = {
    color: '#333',
    fontSize: '40px',
  };

  return (
    <Outer>
      <LoopIcon style={spin} />
    </Outer>
  );
};

const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: #638dbf;
`;

export default Spinner;
