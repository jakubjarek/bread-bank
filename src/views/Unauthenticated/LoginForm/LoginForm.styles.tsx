import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const ErrorList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 1.5rem;
  margin-left: 0.75rem;
`;

export const ErrorItem = styled.li`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const Form = styled.form`
  width: 100%;
`;

export const Submit = styled.button`
  border: none;
  cursor: pointer;
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  transition: opacity 200ms ease-in-out;

  &:disabled {
    background-color: ${({ theme: { color } }) => color.buttonDisabled};
    cursor: default;
  }

  &:hover,
  &:focus {
    &:not([disabled]) {
      opacity: 0.75;
    }
  }
`;

export const LoadingBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.color.backdropLight};
`;
