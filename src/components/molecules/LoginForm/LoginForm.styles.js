import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled.form`
  width: 95%;
`;


export const LoginButton = styled.button`
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
