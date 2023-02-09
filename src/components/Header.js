import React from 'react';
import Modal from './modal';
import { useState } from 'react';
import { FaBars, FaFreebsd } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header-wrap'>
      <div className='header'>
        <FaFreebsd className='suming-logo' />
        <h1>TO DO WHAT TO DO</h1>
        <div className='modal-button-warp' onClick={onClickButton}>
          <FaBars className='hamberger' />
          {isOpen && (
            <Modal
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
