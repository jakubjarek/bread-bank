import styled from 'styled-components';

export const NewTransaciton = styled.button`
  width: 100%;
  margin-bottom: 1.5rem;
  padding-block: 0.75rem;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-top: unset;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  transition: background-color 150ms ease-in-out, color 150ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.lightGray};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: 1.5rem 1rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.black};

  p:first-of-type {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.color.gray};
    font-weight: 500;
  }

  p:last-of-type {
    font-weight: 600;
  }

  p {
    margin: 0;
  }
`;

export const HistoryContainer = styled.div``;
