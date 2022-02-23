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

export const SidebarWrapper = styled.div`
  width: 100vw;
  height: 100vh;
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

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-of-type {
    margin-right: 12px;
  }
`;

export const Browse = styled.div`
  margin: 0 0.75rem;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid black;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
