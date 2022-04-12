import styled from 'styled-components';

interface InputTypes {
  invalid?: boolean;
  hovered?: boolean;
  focused?: boolean;
}

export const Wrapper = styled.div`
  padding-bottom: 1.5rem;
`;

export const Label = styled.label<InputTypes>`
  width: fit-content;
  padding: 4px 6px;
  display: flex;
  border: 1px solid;
  background-color: ${({ focused, theme: { color } }) =>
    focused ? color.black : color.white};
  color: ${({ focused, theme: { color } }) => (focused ? color.white : color.black)};
  border-color: ${({ invalid, theme: { color } }) => (invalid ? color.red : color.black)};
  border-bottom: 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  font-weight: 500;

  // invalid styling
  background-color: ${({ invalid, theme: { color } }) => invalid && color.red};
  color: ${({ invalid, theme: { color } }) => invalid && color.white};
`;

export const Container = styled.div<InputTypes>`
  width: 100%;
  height: 2.5rem;
  padding: 2px 6px;
  display: flex;
  align-items: center;
  background-color: ${({ theme: { color } }) => color.white};
  border: 1px solid;
  border-color: ${({ invalid, theme: { color } }) => (invalid ? color.red : color.black)};
  box-shadow: ${({ hovered, focused, theme: { shadow } }) =>
    (hovered || focused) && shadow.border};

  // invalid styling
  box-shadow: ${({ invalid, theme: { shadow } }) => invalid && shadow.borderInvalid};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 6px;
  width: calc(100% - 40px);

  &::placeholder {
    font-weight: 600;
    color: ${({ theme: { color } }) => color.gray};
  }
`;

export const Icon = styled.div`
  height: 100%;
  padding: 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { color } }) => color.white};

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

export const ErrorIcon = styled.div`
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 10px;
    height: 10px;
    fill: ${({ theme }) => theme.color.red};
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  color: ${({ theme: { color } }) => color.red};
`;
