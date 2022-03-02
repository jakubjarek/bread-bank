import styled from 'styled-components';
import SectionSpacer from '../../atoms/Spacer/Spacer';

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
        <SectionSpacer style={{ maxWidth: '35%' }}>History</SectionSpacer>
        <div>
          <div>
            <p>recieved</p>
            <p>$200</p>
            <span>from:</span> {' '}
            <span>Jane Doe</span>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Authenticated;
