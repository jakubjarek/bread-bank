import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const Container = styled.div`
  width: 100%;
  margin: 3px 0;
  padding: 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 300ms ease-in-out;
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
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

export const LogoutLi = styled(Li)`
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
