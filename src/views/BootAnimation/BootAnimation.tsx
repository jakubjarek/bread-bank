import styled from 'styled-components';

import Logo from 'shared/components/Logo';
import Spinner from 'shared/components/Spinner';

const BootAnimation = () => {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Spinner />
      </Container>
    </Wrapper>
  );
};

export default BootAnimation;

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.lightGray};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
