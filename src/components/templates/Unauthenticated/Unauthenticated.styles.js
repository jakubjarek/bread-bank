import styled from 'styled-components';

export const Container = styled.div`
  max-width: 35rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  max-width: 35rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  margin-bottom: 3rem;
`;

export const WelcomeContainer = styled.div`
  margin-bottom: 1.5rem;
  padding: 0 0.75rem;
`;

export const WelcomeMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
`;
