import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
    transition: fill 200ms ease-in-out;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  color: inheit;
  transition: color 300ms ease-in-out;
`;

export const Li = styled.li`
  list-style: none;
  width: 100%;

  :not(:last-of-type) {
    margin-bottom: 4px;
  }
`;

export const Container = styled.div`
  // sets the color of icon and text
  color: ${({ theme }) => theme.color.black};

  padding: 0.75rem 0.5rem;
  border-radius: 5px;

  width: 100%;
  margin: 3px 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: background-color 300ms ease-in-out;
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
  // added when the route is active
  &.active,
  &:hover,
  &:focus {
    ${Container} {
      background-color: ${({ theme }) => theme.color.black};
    }

    ${Text} {
      color: ${({ theme }) => theme.color.white};
    }

    ${Icon} {
      svg {
        fill: ${({ theme }) => theme.color.white};
      }
    }
  }
`;
