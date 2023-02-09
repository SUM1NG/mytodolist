import React from 'react';
import styled from 'styled-components';

const Modal = ({ onClose }) => {
  const handleClose = () => {
    onClose?.();
  };

  const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 9999;
  `;

  const ModalWrap = styled.div`
    width: 600px;
    height: 600px;
    border-radius: 15px;
    background-color: azure;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const CloseButton = styled.div`
    float: right;
    width: 40px;
    height: 40px;
    margin: 20px;
    cursor: pointer;
  `;

  const Contents = styled.div`
    margin: 50px 30px;
    span {
      font-size: 50px;
    }
  `;

  const Button = styled.button`
    font-size: 14px;
    padding: 10px 20px;
    border: none;
    background-color: #ababab;
    border-radius: 10px;
    color: white;
    font-style: italic;
    font-weight: 200;
    cursor: pointer;
    &:hover {
      background-color: #898989;
    }
  `;

  return (
    <Overlay>
      <ModalWrap>
        <CloseButton onClick={handleClose}>X</CloseButton>
        <Contents>
          <span>hello</span>
          <Button onClick={handleClose}>Close</Button>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};

export default Modal;
