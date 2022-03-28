import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const RouteTemplate = ({ children }: IProps) => {
  return (
    <Container>
      <ContainerInner>{children}</ContainerInner>
    </Container>
  );
};

export default RouteTemplate;

const Container = styled.div`
  width: 100%;
  max-width: 35rem;
  margin-top: 2rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerInner = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.color.lightGray};
  border-radius: 5px;

  @media screen and (min-width: 568px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;
