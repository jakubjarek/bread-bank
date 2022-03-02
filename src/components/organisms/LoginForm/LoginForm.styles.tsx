import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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

  &:hover,
  &:focus {
    opacity: 0.75;
  }
`;
