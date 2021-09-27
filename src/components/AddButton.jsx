import React from 'react';
import styled from 'styled-components';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const minStyles = {
  fontSize: '40px',
  color: 'var(--point)',
  cursor: 'pointer',
};

const iconStyle = {
  fontSize: '50px',
  color: 'var(--point)',
  cursor: 'pointer',
};

const AddButton = (props) => {
  const btnType = props.type;
  const renderStyles = () => {
    if (window.innerWidth <= 375) {
      return minStyles;
    } else {
      return iconStyle;
    }
  };

  return (
    <Footer>
      {btnType !== 'string' ? (
        <AddCircleIcon
          style={renderStyles()}
          onClick={props.click}
        ></AddCircleIcon>
      ) : (
        <AddTxtButton onClick={props.click}>추가하기</AddTxtButton>
      )}
    </Footer>
  );
};

const Footer = styled.footer`
  margin-top: var(--mdMargin);
`;

const AddTxtButton = styled.button`
  border-radius: var(--mdRadius);
  padding: 10px 20px;
  background-color: var(--point);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  @media all and (max-width: 375px) {
    font-size: 14px;
  }
`;

export default AddButton;
