import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }

`;

const appear = keyframes`
 from {
    opacity: 0;
  }

  to {
    opacity: 0.7;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  opacity: 0;
  animation: ${appear} linear 200ms forwards;
`;

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 75%;
  max-width: 350px;
  height: 100%;
  background-color: white;
  border-right: 4px solid black;
  padding: 1.25rem 0;

  transform: translateX(-100%);
  animation: ${slideIn} linear 200ms forwards;

  @media screen and (min-width: 1310px) {
    transform: translateX(0%);
    animation: unset;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.75rem;
`;

export const LogoWrapper = styled.div`
  height: 2rem;

  & svg {
    height: inherit;
    width: auto;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 6px;
  border-radius: 4px;

  & svg {
    width: 22px;
    height: 22px;
  }

  &:first-of-type {
    margin-right: 6px;
  }

  &:hover,
  &:focus {
    background-color: black;
  }

  &:hover svg,
  &:focus svg {
    filter: invert(1);
  }
`;

export const UsernameContainer = styled.div`
  padding: 2px 1rem;
  color: white;
  background-color: black;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;

  & p {
    margin: 0;
  }
`;
