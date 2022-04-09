import styled from 'styled-components';
import { AiOutlinePhone, AiOutlineMail, AiFillGithub } from 'react-icons/ai';


const Contact = () => {
  return (
    <Container>
      <Row>
        <Icon>
          <AiFillGithub size={24} />
        </Icon>
        <a href="https://github.com/jakubjarek/bread-bank" target="_blank" rel="noreferrer">
          Project repository
        </a>
      </Row>
      <Row>
        <Icon>
          <AiOutlinePhone size={24} />
        </Icon>
        <p>+39 4029 340 123</p>
      </Row>
      <Row>
        <Icon>
          <AiOutlineMail size={24} />
        </Icon>
        <p>hello@breadbank.com</p>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    font-weight: bold;
    margin: 0;
  }

  & a {
    display: block;
    text-decoration: underline;
  }
`;

const Icon = styled.div`
  margin-right: 1rem;
`;

export default Contact;
