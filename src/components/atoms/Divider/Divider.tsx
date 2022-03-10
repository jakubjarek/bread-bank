import styled from 'styled-components';

const Divider = styled.div`
  margin: 0.5rem 0;
  border-bottom: 1px solid black;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export default Divider;
