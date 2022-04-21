import styled from 'styled-components';

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

export const CloseButton = styled.button`
  border: none;
  background: none;
  margin-left: auto;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: ${({ theme }) => theme.color.darkGray};
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.lightGray};
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const SubmitButton = styled(CloseButton)`
  margin: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color.black};
  padding-inline: 0;
`;

export const ErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.red};
  margin-bottom: 1rem;
`;
