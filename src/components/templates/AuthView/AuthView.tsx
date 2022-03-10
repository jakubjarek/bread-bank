import styled from 'styled-components';
import Spacer from '../../atoms/Divider/Divider';

export const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  height: 100vh;
`;

function Authenticated() {
  return (
    <Container>
      <Content>
        <Spacer>History</Spacer>
        <div>
          <div>
            <p>recieved</p>
            <p>$200</p>
            <span>from:</span> <span>Jane Doe</span>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Authenticated;
