import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

export const DateColumn = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  color: ${({ theme }) => theme.color.gray};
`;

export const DayAbbrev = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
`;

export const DayNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
`;

export const Month = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 500;
`;

export const VerticalBar = styled.div`
  height: 100%;
  width: 2px;
  background: ${({ theme }) => theme.color.gray};
`;

export const TransactionsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
