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
  name: string;
  type?: React.HTMLInputTypeAttribute;
  invalid: boolean;
  value: string;
  handleChange: React.ChangeEventHandler;
}

const Input = ({
  label,
  placeholder,
  inputId,
  name,
  type = 'text',
  invalid,
  value,
  handleChange,
}: IProps) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleInputEvent = (e: any) => {
    const { type } = e;

    switch (type) {
      case 'focus':
        setFocused(true);
        return;
      case 'blur':
        setFocused(false);
        return;
      case 'mouseenter':
        setHovered(true);
        return;
      case 'mouseleave':
        setHovered(false);
        return;
    }
  };

  return (
    <S.Wrapper>
      <S.Label htmlFor={inputId} focused={focused} invalid={invalid}>
        {label}
      </S.Label>
      <S.Container
        hovered={hovered}
        focused={focused}
        onMouseEnter={handleInputEvent}
        onMouseLeave={handleInputEvent}
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
          onFocus={handleInputEvent}
          onBlur={handleInputEvent}
          id={inputId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </S.Container>
    </S.Wrapper>
  );
};

export default Input;
