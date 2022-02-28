import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

export const WelcomeContainer = styled.div`
  margin-bottom: 1rem;
  padding: 0 0.75rem;
`;

export const WelcomeMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
`;
