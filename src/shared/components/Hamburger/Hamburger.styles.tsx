import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  padding: 4px 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadow.border};
  }
`;

export const Lines = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Line = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.color.black};
`;
