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

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.75rem;
`;

export const Text = styled.p`
  margin: 0;

  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  transition: color 200ms ease-in-out;
`;

export const Li = styled.li`
  list-style: none;
  width: 100%;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  :not(:last-of-type) {
    margin-bottom: 4px;
  }

  &:hover {
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
