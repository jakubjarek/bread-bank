import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const Form = styled.form`
  width: 95%;
`;

export const Submit = styled.button`
  border: none;
  cursor: pointer;
  width: 100%;
  height: 3rem;
  background-color: black;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  transition: opacity 200ms ease-in-out;

  &:disabled {
    background-color: #adadad;
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
  width: 98%;
  height: 65%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: #afafaf1f;
`;
