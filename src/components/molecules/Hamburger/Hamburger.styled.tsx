import styled from 'styled-components';

export const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  padding: 4px 6px;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 3px black;
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
  background: black;
`;
