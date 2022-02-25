import styled from 'styled-components';

export const InputWrapper = styled.div`
  padding-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: flex;
  width: fit-content;
  padding: 4px 6px;
  border: 1px solid;
  border-color: ${({ invalid }) => (invalid ? 'red' : 'black')};
  border-bottom: 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  background-color: ${({ focused }) => (focused ? `black` : 'white')};
  color: ${({ focused }) => (focused ? `white` : 'black')};

  // invalid styling
  background-color: ${({ invalid }) => invalid && 'red'};
  color: ${({ invalid }) => invalid && 'white'};
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  padding: 2px;
  align-items: center;
  border: 1px solid;
  border-color: ${({ invalid }) => (invalid ? 'red' : 'black')};
  box-shadow: ${({ hovered, focused }) =>
    hovered || focused ? `inset 0 0 0 2px black` : null};

  // invalid styling
  box-shadow: ${({ invalid }) => invalid && `inset 0 0 0 2px red`};
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 8px 4px;

  &::placeholder {
    font-weight: 600;
    color: #858585;
  }
`;

export const IconWrapper = styled.div`
  height: 100%;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

export const ErrorIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;

  svg {
    width: 10px;
    height: 10px;
    fill: red;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: red;
`;
