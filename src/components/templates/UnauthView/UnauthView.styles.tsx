import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

export const Welcome = styled.div`
  margin-bottom: 1rem;
  padding: 0 0.75rem;
`;

export const Message = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
`;
