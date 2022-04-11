import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  box-shadow: rgba(3, 15, 36, 0.25) 0px 1px 2px 0px;
  cursor: pointer;

  &:hover,
  &:focus-within {
    background-color: ${({ theme }) => theme.color.lighterGray};
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    fill: ${({ theme }) => theme.color.gray};
  }
`;

export const Amount = styled.span<{ received: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  color: ${({ theme, received }) => (received ? theme.color.green : theme.color.red)};
`;

export const Participant = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  color: ${({ theme }) => theme.color.black};
`;
