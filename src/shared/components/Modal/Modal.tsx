import { useState } from 'react';
import { createPortal } from 'react-dom';
import * as S from './Modal.styles';

interface IProps {
  renderContent: JSX.Element;
  handleOutsideClick: () => void;
}

const Modal = ({ renderContent, handleOutsideClick }: IProps) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(false);
    handleOutsideClick();
  };

  return (
    <>
      {open && (
        <>
          {createPortal(
            <S.Wrapper>
              <S.Content>{renderContent}</S.Content>
              <S.Backdrop onClick={handleClick} />
            </S.Wrapper>,
            document.getElementById('modal-container') as Element
          )}
        </>
      )}
    </>
  );
};

export default Modal;
