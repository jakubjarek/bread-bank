import { useState } from 'react';
import * as S from './Input.styles';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

const InputIcon = ({ type }: { type: React.HTMLInputTypeAttribute }) => {
  switch (type) {
    case 'email':
      return <AiOutlineMail />;
    case 'password':
      return <RiLockPasswordLine />;
    default:
      return null;
  }
};

interface IProps {
  label: string;
  placeholder: string;
  inputId: string;
  type?: React.HTMLInputTypeAttribute;
  invalid: boolean;
  invalidMessage: string;
  value: string;
  handleChange: React.ChangeEventHandler;
}

const Input = ({
  label,
  placeholder,
  inputId,
  type = 'text',
  invalid,
  invalidMessage,
  value,
  handleChange,
}: IProps) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleMouseEnter = () => {
    if (invalid) return;
    setHovered(true);
  };

  const handleMouseLeave = () => {
    if (invalid) return;
    setHovered(false);
  };

  const handleFocus = () => {
    if (invalid) return;
    setFocused(true);
  };

  const handleBlur = () => {
    if (invalid) return;
    setFocused(false);
  };

  return (
    <S.Wrapper>
      <S.Label htmlFor={inputId} focused={focused} invalid={invalid}>
        {label}
      </S.Label>
      <S.Container
        hovered={hovered}
        focused={focused}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        invalid={invalid}
      >
        {type !== 'text' ? (
          <>
            <S.Icon>
              <InputIcon type={type} />
            </S.Icon>
          </>
        ) : null}
        <S.Input
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          id={inputId}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </S.Container>
      {invalid ? (
        <S.Error>
          <S.ErrorIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M16.971 0h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-1.402 16.945l-3.554-3.521-3.518 3.568-1.418-1.418 3.507-3.566-3.586-3.472 1.418-1.417 3.581 3.458 3.539-3.583 1.431 1.431-3.535 3.568 3.566 3.522-1.431 1.43z" />
            </svg>
          </S.ErrorIcon>
          <S.ErrorMessage>{invalidMessage}</S.ErrorMessage>
        </S.Error>
      ) : null}
    </S.Wrapper>
  );
};

export default Input;
