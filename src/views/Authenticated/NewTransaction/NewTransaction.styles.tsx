import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  padding: 1.5rem;
  border-radius: 5px;
`;

export const LabelMock = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.color.gray};
  margin-bottom: 0.25rem;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const InputMock = styled.div`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.gray};
  background: ${({ theme }) => theme.color.lightGray};
  color: ${({ theme }) => theme.color.gray};
  font-weight: 500;
  border-radius: 5px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding-block: 0.75rem;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 5px;
  cursor: pointer;
  transition: color 150ms ease-in-out, background-color 150ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.lightGray};
    color: ${({ theme }) => theme.color.black};
  }
`;
