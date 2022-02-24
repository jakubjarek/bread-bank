import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    transition: fill 200ms ease-in-out;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.75rem;
`;

const Text = styled.p`
  margin: 0;

  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  transition: color 200ms ease-in-out;
`;

const StyledLi = styled.li`
  list-style: none;

  width: 100%;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  :not(:last-of-type) {
    margin-bottom: 4px;
  }

  &:hover {
    background-color: black;

    & ${IconWrapper} {
      svg {
        fill: white;
      }
    }

    & ${Text} {
      color: white;
    }
  }
`;

function SidebarItem({ icon, text, onClick }) {
  return (
    <StyledLi onClick={onClick}>
      <Container>
        <IconWrapper>{icon}</IconWrapper>
        <Text>{text}</Text>
      </Container>
    </StyledLi>
  );
}

export default SidebarItem;
