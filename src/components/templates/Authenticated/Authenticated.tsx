import styled from 'styled-components';
import SectionSpacer from '../../atoms/SectionSpacer/SectionSpacer';

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  height: 100vh;
`;

function Authenticated() {
  return (
    <Container>
      <Content>
        <SectionSpacer style={{ maxWidth: '35%' }}>Accouts</SectionSpacer>
      </Content>
    </Container>
  );
}

export default Authenticated;
