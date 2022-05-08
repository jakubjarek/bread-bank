import styled from 'styled-components';

export const LoadingContainer = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  padding: 1.5rem 1rem 2rem;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 3px 5px 1px ${({ theme }) => theme.color.backdropLight};
  border-radius: 5px;

  @media screen and (min-width: 608px) {
    padding-inline: 2.5rem;
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TransactionId = styled.span`
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.color.lightGray};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.gray};
  border-radius: 4px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: ${({ theme }) => theme.color.darkGray};
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &focus {
    background-color: ${({ theme }) => theme.color.lightGray};
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const HeadingSection = styled.div`
  margin-top: 2.5rem;
  color: ${({ theme }) => theme.color.black};
`;

export const Heading = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
`;

export const Subheading = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: 1.5rem;
  font-weight: 600;
`;

export const Details = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const DetailsItem = styled.div`
  padding: 12px 32px;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightGray};
  }
`;

export const ItemTitle = styled.h4`
  margin: 0;
  font-weight: 500;
  color: ${({ theme }) => theme.color.darkGray};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const ItemText = styled.p`
  margin: 0;
  margin-top: 6px;
`;
