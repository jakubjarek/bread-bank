import styled from 'styled-components';

const Divider = styled.div`
  margin: 0.5rem 0;
  padding-bottom: 2px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: #b5b8bb;
  border-bottom: 1px solid #c8cccf;
`;

export default Divider;
