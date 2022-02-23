import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  width: fit-content;
  padding: 4px 6px;
  border: 1px solid black;
  border-bottom: 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  background-color: ${({ focused }) => (focused ? `black` : 'white')};
  color: ${({ focused }) => (focused ? `white` : 'black')};
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  padding: 2px;
  align-items: center;
  border: 1px solid black;
  box-shadow: ${({ hovered }) => (hovered ? `inset 0 0 0 2px black` : null)};
  box-shadow: ${({ focused }) => (focused ? `inset 0 0 0 2px black` : null)};
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
