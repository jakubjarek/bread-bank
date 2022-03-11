import styled from 'styled-components';

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 22px;
    height: 22px;
    transition: fill 200ms ease-in-out;
  }
`;

export const Text = styled.p`
  margin: 0;

  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  transition: color 300ms ease-in-out;
`;

export const Li = styled.li`
  list-style: none;
  width: 100%;

  :not(:last-of-type) {
    margin-bottom: 4px;
  }
`;

export const Container = styled.button`
  border: none;
  background: none;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 3px 0;
  padding: 0.5rem 0.75rem;
  transition: background-color 300ms ease-in-out;
  cursor: pointer;

  &:hover, &:focus {
    background-color: black;

    & ${Icon} {
      svg {
        fill: white;
      }
    }

    & ${Text} {
      color: white;
    }
  }
`;
