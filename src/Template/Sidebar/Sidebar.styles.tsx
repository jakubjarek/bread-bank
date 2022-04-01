import styled, { keyframes } from 'styled-components';
import Divider from 'shared/components/Divider';

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
    opacity: 1;
  }
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.backdropDark};
  opacity: 0;
  animation: ${appear} linear 200ms forwards;
`;

export const FixedContainer = styled.div`
  padding: 2.5rem 0.75rem;
  overflow-y: auto;
  position: fixed;
  top: 0;
  width: 75%;
  max-width: ${({ theme }) => theme.size.sidebar};
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightGray};
  /* border-right: 2px solid ${({ theme }) => theme.color.black}; */
  border-right: 1px solid #e1e4e6;
  z-index: 99;
  transform: translateX(-100%);
  animation: ${slideIn} linear 200ms forwards;

  @media screen and (min-width: 910px) {
    transform: translateX(0%);
    animation: unset;
  }

  ${Divider} {
    margin: 0.5rem 0;
  }
`;

export const Header = styled.div`
  padding: 0 0.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  height: 2rem;

  svg {
    height: inherit;
    width: auto;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
