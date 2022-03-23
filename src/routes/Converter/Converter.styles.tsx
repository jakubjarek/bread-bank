import styled, { css } from 'styled-components';

const InputStyles = css`
  background: none;
  border: 2px solid black;
  height: 2.25rem;
  width: 100%;

  &:focus {
    box-shadow: inset 0 0 0 2px black;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Column = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled.input`
  ${InputStyles}
  padding: 0.25rem 0.5rem;
`;

export const Select = styled.select`
  ${InputStyles}
  padding: 0.25rem;
`;
