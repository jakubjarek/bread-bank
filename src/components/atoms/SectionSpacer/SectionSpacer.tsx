import styled from 'styled-components';

const SectionSpacer = styled.span`
  display: block;
  margin: 0.5rem 0.75rem;

  border-bottom: 1px solid black;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export default SectionSpacer;
