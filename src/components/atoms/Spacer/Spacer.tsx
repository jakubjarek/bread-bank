import styled from 'styled-components';

const Spacer = styled.div`
  margin: 0.5rem 0.75rem;
  border-bottom: 1px solid black;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export default Spacer;
