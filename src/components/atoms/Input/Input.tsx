import { HTMLInputTypeAttribute } from 'react';
import { useState } from 'react';
import {
  InputWrapper,
  Label,
  InputContainer,
  StyledInput,
  IconWrapper,
  ErrorContainer,
  ErrorMessage,
  ErrorIconWrapper,
} from './Input.styles';

const InputIcon = ({ type }: {type: HTMLInputTypeAttribute}) => {
  if (type === 'email') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
      </svg>
    );
  } else if (type === 'password') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M10 17c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm3 0c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm3 0c0 .552-.447 1-1 1s-1-.448-1-1 .447-1 1-1 1 .448 1 1zm2-7v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10-4c0-2.206 1.795-4 4-4s4 1.794 4 4v4h-8v-4zm11 16h-14v-10h14v10z" />
      </svg>
    );
  } else {
    return null;
  }
};

interface InputProps {
  label: string;
  placeholder: string;
  inputId: string;
  type: HTMLInputTypeAttribute;
  invalid: boolean;
  invalidMessage: string;
  value: string;
  handleChange: React.ChangeEventHandler;
}

function Input({
  label,
  placeholder,
  inputId,
  type,
  invalid,
  invalidMessage,
  value,
  handleChange,
}: InputProps) {
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
    <InputWrapper>
      <Label htmlFor={inputId} focused={focused} invalid={invalid}>
        {label}
      </Label>
      <InputContainer
        hovered={hovered}
        focused={focused}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        invalid={invalid}
      >
        <IconWrapper>
          <InputIcon type={type} />
        </IconWrapper>
        <StyledInput
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          id={inputId}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </InputContainer>
      {invalid ? (
        <ErrorContainer>
          <ErrorIconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M16.971 0h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-1.402 16.945l-3.554-3.521-3.518 3.568-1.418-1.418 3.507-3.566-3.586-3.472 1.418-1.417 3.581 3.458 3.539-3.583 1.431 1.431-3.535 3.568 3.566 3.522-1.431 1.43z" />
            </svg>
          </ErrorIconWrapper>
          <ErrorMessage>{invalidMessage}</ErrorMessage>
        </ErrorContainer>
      ) : null}
    </InputWrapper>
  );
}

export default Input;