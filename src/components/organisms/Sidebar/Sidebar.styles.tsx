import styled, { keyframes } from 'styled-components';
import Divider from '../../atoms/Divider/Divider';

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

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  opacity: 0;
  animation: ${appear} linear 200ms forwards;
`;

export const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  width: 75%;
  max-width: 350px;
  height: 100%;
  background-color: white;
  border-right: 4px solid black;
  z-index: 99;
  transform: translateX(-100%);
  animation: ${slideIn} linear 200ms forwards;

  @media screen and (min-width: 910px) {
    transform: translateX(0%);
    animation: unset;
  }

  & ${Divider} {
    margin: 0 0.75rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0.75rem;
`;

export const Logo = styled.div`
  height: 2rem;

  & svg {
    height: inherit;
    width: auto;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
