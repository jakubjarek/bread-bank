import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;

  @media screen and (min-width: 910px) {
    margin-left: ${({ theme }) => theme.size.sidebar};
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.color.backdropDark};
`;

export const Content = styled.div`
  z-index: 999;
  max-width: 38rem;
  width: 100%;
  padding: 0 0.5rem;
`;
